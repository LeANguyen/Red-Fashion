import React from "react";

const SignInForm = () => {
  return (
    <div>
      <form>
        <p className="text-center font-weight-bold mt-3">
          Please Sign In to save a cart
        </p>
        <div class="bg-dark rounded-pill px-4 py-3 mb-4 text-uppercase font-weight-bold text-white">
          Sign In to an Account
        </div>

        <div class="form-group">
          <strong class="text-muted">Email: </strong>
          <input
            type="text"
            class="form-control"
            id="email_input_signin"
            aria-describedby="emailHelp"
            placeholder="Email"
            onreset="retrieveMe()"
          ></input>
        </div>

        <div class="form-group">
          <strong class="text-muted">Password: </strong>
          <input
            type="password"
            class="form-control"
            id="pass_input_signin"
            placeholder="Password"
          ></input>
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="remember_checkbox_signin"
          ></input>
          <strong class="text-muted">Remember me</strong>
        </div>

        <button
          class="btn btn-info rounded-pill py-2 btn-block text-white font-weight-bold mt-3"
          id="signin_btn"
          type="button"
          onclick="rememberMe()"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
