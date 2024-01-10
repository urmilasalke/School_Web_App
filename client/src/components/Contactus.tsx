import React from "react";
import axios from "axios";
import "../style/contactus.css";
const Contactus = () => {
  // const postData = () => {
  //   axios
  //     .post("http://localhost:4000/contact",{
  //       firstName: firstName,
  //       lastName: ,
  //       email: ,
  //       message: ,
  //     })
  //     .then(() => {})
  //     .catch(() => {
  //       console.log("error in contact us data post ");
  //     });
  // };
  //onClick={() => postData()}
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 "></div>
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="head text-center text-white">
                      <h3>Contact Us</h3>
                    </div>
                  </div>
                </div>
                <div className="form p-3">
                  <div className="row my-5">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="First Name"
                      />
                      <span className="Focus-border"></span>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="Last Name"
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="Email Address"
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="form-row pt-5">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="Your Message"
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-lg-6"></div>
                    <div className="offset-2 col-lg-4">
                      <button className="btn1">SEND MESSAGE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
