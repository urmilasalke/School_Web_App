import React from "react";
// import Table from "react-bootstrap/Table";
import { MainState } from "./store/AdmissionStore";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../style/admission.css";
const Admission = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/`)
  //     .then(({ data }) => {
  //       dispatch(setAdmissionGrades(data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  console.log(grades);
  console.log();
  // axios.get(`http://localhost:5000/${category}`).then(()=>{}).catch(()=>{})
  return (
    <>
      <div>
        <section className="school"></section>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="item">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="item">
            Admission
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h5 className="h5">Grades Available!</h5>
      <ul>
        <Link to="/preprimary" style={{ textDecoration: "none" }}>
          <li>Pre-primary</li>
        </Link>

        <Link to="/primary" style={{ textDecoration: "none" }}>
          <li>Primary</li>
        </Link>
        <Link to="/secondary" style={{ textDecoration: "none" }}>
          <li>Secondary</li>
        </Link>
      </ul>
      {/* <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Fees</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <>
              {grade.options.map((option) => (
                <>
                  <tr>
                    <td>{option.fees}</td>
                    <td>{option.grade}</td>
                    <td>{option.seats}</td>
                  </tr>
                </>
              ))}
            </>
          ))}
        </tbody>
      </Table> */}
    </>
  );
};

export default Admission;
