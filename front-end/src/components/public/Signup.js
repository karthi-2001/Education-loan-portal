import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import SignupImage from "../../images/sign-up.jpeg";
const Signup = () => {
  const navigate=useNavigate();
  return (
    <div className="main signup-scrollable-content">
      <div className="left">
        <img className="signup-image" src={SignupImage} alt="img not found" />
      </div>

      <div className="right">
        <form className="signup">
          <h3
            style={{ paddingTop: "5px", fontSize: "25px", textAlign: "center" }}
          >
            SIGN UP
          </h3>

          <div className="signup-content">
            <div>
              <label className="signup-label" htmlFor="fname">First Name</label>
              <input className="signup-input" type="text" id="fname" />
            </div>

            <div>
              <label className="signup-label" htmlFor="mname">Middle Name (Optional)</label>
              <input className="signup-input" type="text" id="mname" />
            </div>

            <div>
              <label className="signup-label" htmlFor="lname">Last Name</label>
              <input className="signup-input" type="text" id="lname" />
            </div>

            <div>
              <label className="signup-label" htmlFor="email">Email</label>
              <input className="signup-input" type="email" id="email" />
            </div>

            <div>
              <label className="signup-label" htmlFor="pass">Password</label>
              <input className="signup-input" type="password" id="pass" />
            </div>

            <div>
              <label className="signup-label" htmlFor="cpass">Confirm Password</label>
              <input className="signup-input" type="password" id="cpass" />
            </div>

            <div>
              <label className="signup-label" htmlFor="address">Address</label>
              <input className="signup-input" type="text" id="address" />
            </div>

            <div>
              <label className="signup-label" htmlFor="mno">Phone Number</label>
              <input className="signup-input" type="text" id="mno" />
            </div>
          </div>

          <div className="signup-btn">
            <button className="signup-button">Sign up</button>
            <button className="signup-button">Cancel</button>
          </div>

          <div className="br">
            <hr />
            <span style={{ color: "grey" }}>OR</span>
            <hr />
          </div>

          <div className="fr">
            {/*<img style={{height:"40px",width:"40px",margin:"0",padding:"10px",cursor:"pointer"}} src="/img/google 1.png" alt=""/> */}
            <span style={{ color: "grey" }}>
              Already have an account?{" "}
              <span style={{ color: "#5bc6ce", textDecoration: "none", cursor:"pointer" }} onClick={()=>navigate('/login')}>
                Login
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
