import React from "react";

function Education() {
  return (
    <secton>
      <div className="education-page">
        <center>
          <h2 className="titele-text">
           
            <span>My </span>Education
          </h2>
        </center>

        <div className="box--container">
          <div className="box-1">
            <div className="e-box">
              <i class="fas fa-graduation-cap"></i>
              <span>2023-2025</span>
              <h3>MARWADI UNIVERSITY  (MCA)</h3>
              <p>Rajkot,Gujrat india</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2020-2023</span>
              <h3>SAHAJANAND COLLEGE (BCA)</h3>
              <p>Gondal,Rajkot india</p>
            </div>
          </div>

          <div className="box-1">
            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2019-2020</span>
              <h3>SHREE AURO EDUCATION ZONE(12th)</h3>
              <p>Gondal, Gujarat</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2017-2018</span>
              <h3>SHREE ANIDA MADHYAMIC SCHOOL(10th)</h3>
              <p>Anida,Gondal,Gujarat</p>

            </div>
          </div>
        </div>
      </div>
    </secton>
  );
}

export default Education;
