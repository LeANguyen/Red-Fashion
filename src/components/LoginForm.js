import React, { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import useAuthApi from "../api/useAuthApi";

const LoginForm = () => {
  const authApi = useAuthApi();
  const signInApi = useApi(authApi.signIn);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleSubmit = async () => {
    const response = await signInApi.request(email, pass);
    if (response.data.length !== 0) {
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <form>
        <p className="text-center font-weight-bold my-2">
          Please login to save a cart
        </p>
        <div className="bg-dark rounded px-4 py-2 my-4 text-center font-weight-bold text-white">
          Login
        </div>

        <div className="form-group">
          <strong className="text-muted">Email: </strong>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <strong className="text-muted">Password: </strong>
          <input
            type="password"
            className="form-control"
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
