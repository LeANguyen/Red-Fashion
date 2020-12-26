import React, { useState } from "react";
import useApi from "../hooks/useApi";
import useAuthApi from "../api/useAuthApi";
import { Link, useHistory } from "react-router-dom";
import useCartApi from "../api/useCartApi";

const RegisterForm = () => {
  const history = useHistory();
  const authApi = useAuthApi();
  const cartApi = useCartApi();

  const signUpApi = useApi(authApi.signUp);
  const signInApi = useApi(authApi.signIn);
  const getClientByEmailApi = useApi(authApi.getClientByEmail);
  const createCartApi = useApi(cartApi.createCart);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [policyAgree, setPolicyAgree] = useState(false);

  const checkForm = () => {
    if (name == "") {
      return alert("Name is required");
    }
    if (email == "") {
      return alert("Email is required");
    }
    if (pass == "") {
      return alert("Password is required");
    }
    if (pass.length < 3) {
      return alert("Password should be at least 4 characters");
    }
    if (pass != passConfirm) {
      return alert("Password confirmation error");
    }
    if (!policyAgree) {
      return alert("Please agree to the Terms of Use & Privacy Policy");
    }
    checkEmail();
  };

  const checkEmail = async () => {
    const response = await getClientByEmailApi.request(email);
    if (response.data.length !== 0) {
      return alert("Email is already in use!");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const response = await signUpApi.request(name, email, pass);
    if (response.ok) {
      if (response.data.length !== 0) {
        alert("Signup Success");
        loginExtraHandling();
      } else {
        alert("Signup Failed");
      }
    } else {
      alert("Register Failed");
    }
  };

  const loginExtraHandling = async () => {
    const response = await signInApi.request(email, pass);
    if (response.ok) {
      if (response.data.length !== 0) {
        alert("Login Success");
        localStorage.setItem("id", response.data[0].id);
        localStorage.setItem("name", response.data[0].name);
        createCartExtraHandling();
      } else {
        alert("Wrong name or password");
      }
    } else {
      alert("Login Failed");
    }
  };

  const createCartExtraHandling = async () => {
    const response = await createCartApi.request(localStorage.getItem("id"));
    if (response.ok) {
      history.push("/");
    } else {
      alert("createCart Failed");
    }
  };

  return (
    <form>
      <p className="text-center font-weight-bold my-2">
        Don't have an account yet?
      </p>
      <div className="bg-dark rounded px-4 py-2 my-4 text-center font-weight-bold text-white">
        Register
      </div>
      <div className="form-group">
        <strong className="text-muted">Username: </strong>
        <input
          type="text"
          className="form-control"
          id="name_input_signup"
          aria-describedby="emailHelp"
          placeholder="Username"
          onChange={event => setName(event.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <strong className="text-muted">Email: </strong>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          id="email_input_signup"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <strong className="text-muted">Password: </strong>
        <input
          type="password"
          className="form-control"
          id="pass1_input_signup"
          placeholder="Password"
          oninput="checkValidOnInput()"
          onChange={event => setPass(event.target.value)}
        ></input>
        <small id="pass1_alert_signup"></small>
      </div>

      <div className="form-group">
        <strong className="text-muted">Password Confirmation: </strong>
        <input
          type="password"
          className="form-control"
          id="pass2_input_signup"
          placeholder="Confirm Password"
          onChange={event => setPassConfirm(event.target.value)}
        ></input>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="accept_checkbox_signup"
          onChange={() => {
            setPolicyAgree(!policyAgree);
          }}
        ></input>
        <strong className="text-muted">
          I accept the Terms of Use & Privacy Policy
        </strong>
      </div>
      <button
        type="button"
        id="signup_btn"
        className="btn btn-info rounded-pill py-2 btn-block text-white font-weight-bold mt-3"
        onClick={() => checkForm()}
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
