import React from "react";
import Logo from "../../images/books.jfif";

function ApplicationHeading() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="books" src={Logo} />
      </div>
      <div className="rightSide" align="right">
        <h1>Student Loan Application Form</h1>
      </div>
    </div>
  );
}

export default ApplicationHeading;
