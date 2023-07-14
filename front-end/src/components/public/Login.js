import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../images/LoginImage.jpeg";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const navigate=useNavigate();

  const handleForgetPassword = () => {
    setForgotPassword(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleLogin=()=>{
    if(email==='admin' && password==='admin'){
      navigate('/admin/dashboard');
    }
    else if(email==='user' && password==='user'){
      navigate('/user/dashboard');
    }
    else{
      setError("Invalid user credentials");
    }
  }

  const handleSendEmail = () => {
    // Code to send the auto-generated email and handle password change
    console.log("Sending email to:", email);
    // Reset the forget password state and email field
    setForgotPassword(false);
    setEmail("");
  };
  return (
    <div className="">
      <title>Login Page</title>

      <div class="login-container">
        <div class="content img1">
          <div class="image">
            <img
              className="login-image"
              style={{ height: "420px" }}
              src={LoginImage}
              alt="img not found"
            />
          </div>
          <div className="login-formContent">
            <div className="">
              <div class="login">
                <div style={{ fontSize: "larger" }}>Login</div>
              </div>
              {!forgotPassword ? (
                <form>
                  <div className="formContent">
                    <div className="formLabel">
                      <label className="login-label" for="email" style={{ minWidth: "80px" }}>
                        Email
                      </label>
                      <input
                        className="login-input"
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>

                    <div className="formLabel">
                      <label className="login-label" for="pass" style={{ minWidth: "80px" }}>
                        Password
                      </label>
                      <input className="login-input" type="password" placeholder="Password" id="pass" onChange={handlePasswordChange} />
                    </div>
                    <p className="login-error">{error}</p>
                    <div
                      className="password-reset"
                      style={{
                        textAlign: "end",
                        fontSize: "smaller",
                        color: "#473C3C",
                      }}
                    >
                      <label className="login-label" style={{cursor:'pointer'}} onClick={handleForgetPassword}>
                        Forget Password?
                      </label>
                    </div>
                  </div>
                  <div className="button" style={{ textAlign: "center" }}>
                      <span className="login-button" onClick={handleLogin}>Login</span>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="formContent">
                    <div className="formLabel">
                      <label className="login-label" for="email" style={{ minWidth: "80px" }}>
                        Email
                      </label>
                      <input
                        className="login-input"
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="" style={{ textAlign: "center" }}>
                    <button className="login-button" onClick={handleSendEmail}>Send</button>
                  </div>
                </div>
              )}

              <div className="br">
                <hr />
                <hr/>
                <span style={{ color: "grey" }}>OR</span>
                <hr />
                <hr/>
                <br/>
                <br/>
              </div>
              <div className="fr" style={{ fontSize: "smaller" }}>
                <span style={{ color: "#473C3C" }}>
                  Don't have an account?{" "}
                  <span
                    onClick={()=>navigate('/register')}
                    style={{
                      color: "#098981",
                      textDecoration: "none",
                      cursor:"pointer"
                    }}
                  >
                    Sign Up
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
