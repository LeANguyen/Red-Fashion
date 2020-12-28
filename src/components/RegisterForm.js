import React, { useState } from "react";
import useApi from "../hooks/useApi";
import useAuthApi from "../api/useAuthApi";
import { Link, useHistory } from "react-router-dom";
import useCartApi from "../api/useCartApi";
import FormHeader from "./form/FormHeader";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import FormCheckbox from "./form/FormCheckbox";
import FormText from "./form/FormText";

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
      <FormText _text="Don't have an account yet?"></FormText>
      <FormHeader _text="Register"></FormHeader>
      <FormTextInput
        _iconName="user"
        _placeHolder="Username"
        _onChange={event => setName(event.target.value)}
      ></FormTextInput>

      <FormTextInput
        _iconName="envelope"
        _placeHolder="Email"
        _onChange={event => setEmail(event.target.value)}
      ></FormTextInput>

      <FormTextInput
        _iconName="lock"
        _placeHolder="Password"
        _onChange={event => setPass(event.target.value)}
      ></FormTextInput>

      <FormTextInput
        _iconName="lock"
        _placeHolder="Password Confirmation"
        _onChange={event => setPassConfirm(event.target.value)}
      ></FormTextInput>

      <FormCheckbox
        _text="I accept the Terms of Use & Privacy Policy"
        _onChange={() => setPolicyAgree(!policyAgree)}
      ></FormCheckbox>

      <FormButton
        _text="Register"
        _onClick={() => checkForm()}
        _variant="info my-4"
      ></FormButton>
    </form>
  );
};

export default RegisterForm;
