import React, { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import useAuthApi from "../api/useAuthApi";

const SignInForm = () => {
  const authApi = useAuthApi();
  const signInApi = useApi(authApi.signIn);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleSubmit = () => {
    signInApi.request(email, pass);
    if (signInApi.data.length !== 0) {
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <form>
        <p className="text-center font-weight-bold mt-3">
          Please Sign In to save a cart
        </p>
        <div className="bg-dark rounded-pill px-4 py-3 mb-4 text-uppercase font-weight-bold text-white">
          Sign In to an Account
        </div>

        <div className="form-group">
          <strong className="text-muted">Email: </strong>
          <input
            type="text"
            className="form-control"
            id="email_input_signin"
            aria-describedby="emailHelp"
            placeholder="Email"
            onreset="retrieveMe()"
            onChange={event => setEmail(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <strong className="text-muted">Password: </strong>
          <input
            type="password"
            className="form-control"
            id="pass_input_signin"
            placeholder="Password"
            onChange={event => setPass(event.target.value)}
          ></input>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="remember_checkbox_signin"
          ></input>
          <strong className="text-muted">Remember me</strong>
        </div>

        <button
          className="btn btn-info rounded-pill py-2 btn-block text-white font-weight-bold mt-3"
          id="signin_btn"
          type="button"
          onClick={() => handleSubmit()}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
