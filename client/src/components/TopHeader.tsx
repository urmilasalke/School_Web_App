import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import "../style/topheader.css";
const TopHeader = () => {
  return (
    <div className="topheader">
      <div className="container">
        <div className="row py-1">
          <div className="col-sm-2">
            <FontAwesomeIcon
              icon={faPhone}
              color="green"
              // className="fontawsome-phone"
            ></FontAwesomeIcon>
            +91 9567238389
          </div>
          <div className="col-sm-4">
            <FontAwesomeIcon
              icon={faMailBulk}
              color="red"
              // className="fontawsome-mail"
            ></FontAwesomeIcon>
            lcps.preprimary@learningcurve.in
          </div>
          <div className="col-sm-6 schoolname">
            {" "}
            Learning Curve public School
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
