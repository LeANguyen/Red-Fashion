import React from "react";

const SignUpForm = () => {
  return (
    <form>
      <p className="text-center font-weight-bold mt-3">
        Don't have an account yet?
      </p>
      <div
        class="bg-dark rounded-pill px-4 py-3 mb-4 text-uppercase font-weight-bold"
        style={{ color: "white" }}
      >
        Sign Up an Account
      </div>
      <div class="form-group">
        <strong class="text-muted">Username: </strong>
        <input
          type="text"
          class="form-control"
          id="name_input_signup"
          aria-describedby="emailHelp"
          placeholder="Username"
        ></input>
      </div>

      <div class="form-group">
        <strong class="text-muted">Email: </strong>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          id="email_input_signup"
          placeholder="Email"
        ></input>
      </div>

      <div class="form-group">
        <strong class="text-muted">Password: </strong>
        <input
          type="password"
          class="form-control"
          id="pass1_input_signup"
          placeholder="Password"
          oninput="checkValidOnInput()"
        ></input>
        <small id="pass1_alert_signup"></small>
      </div>

      <div class="form-group">
        <strong class="text-muted">Password Confirmation: </strong>
        <input
          type="password"
          class="form-control"
          id="pass2_input_signup"
          placeholder="Confirm Password"
        ></input>
      </div>

      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="accept_checkbox_signup"
        ></input>
        <strong class="text-muted">
          I accept the Terms of Use & Privacy Policy
        </strong>
      </div>
      <button
        type="button"
        id="signup_btn"
        class="btn btn-info rounded-pill py-2 btn-block text-white font-weight-bold mt-3"
        onclick={() => {
          "checkValidOnSubmit()";
        }}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
