import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
const Footer = () => {
  return (
    // p-3 mb-2 bg-dark bg-gradient text-white
    <footer>
      <div className="container">
        <div className="row footerlink">
          <div className="col-sm-4"></div>
          {/* <div className="col-1">Home</div> */}
          <div className="col-sm-1">
            <Link to="/" style={{ textDecoration: "none", color: "orange" }}>
              <h6>Home</h6>
            </Link>
          </div>
          <div className="col-sm-1">
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "orange" }}
            >
              <h6>About us</h6>
            </Link>
          </div>
          <div className="col-sm-1">
            <Link
              to="/admission"
              style={{ textDecoration: "none", color: "orange" }}
            >
              <h6>Admission</h6>
            </Link>
          </div>
          <div className="col-sm-2">
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "orange" }}
            >
              <h6>Contact us</h6>
            </Link>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row footerlink justify">
          <div className="col-sm-4">
            <h5>Phone</h5>
            <p>
              PRE-PRIMARY<br></br>+91 9567238389 <br></br>PRIMARY & SECONDARY{" "}
              <br></br>+91 9567238389
            </p>
          </div>
          <div className="col-sm-4">
            <h5>Email</h5>
            <p>
              PRE-PRIMARY : <br></br>lcps.preprimary@learningcurve.in <br></br>
              PRIMARY :<br></br>
              lcps.primarysec@learningcurve.in
            </p>
          </div>
          <div className="col-sm-4">
            <h5>Location</h5>
            <p>
              Phase 1, Hinjawadi, Pimpari-Chinchawad, <br></br> Near Hotel Lemon
              Tree, Pune. <br></br> Maharashtra 411057
            </p>
          </div>
        </div>

        <hr></hr>
        <p className="justify">Copyright @ 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
