import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAdmissionGrades } from "./reducers/AdmissionReducer";
import { MainState } from "./store/AdmissionStore";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../style/pre-primary.css";
const PrePrimary = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/pre-primary`)
      .then(({ data }) => {
        dispatch(setAdmissionGrades(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log();
  console.log(grades);
  return (
    <>
      <div>
        <section className="pre-primaryimg"></section>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="item">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admission" className="item">
            Admission
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="item">
            Pre-primary
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 ">
            <Table striped bordered hover size="sm" className="table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Fees</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                {grades &&
                  grades.map((grade) => (
                    <>
                      {grade.options.map((option) => (
                        <>
                          <tr>
                            <td>{option.grade}</td>
                            <td>{option.fees}</td>
                            <td>{option.seats}</td>
                          </tr>
                        </>
                      ))}
                    </>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
};

export default PrePrimary;
