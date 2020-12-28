import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";
import useAuthApi from "../api/useAuthApi";
import { login, logout } from "../actions/userActions";
import FormHeader from "./form/FormHeader";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import FormCheckbox from "./form/FormCheckbox";
import FormText from "./form/FormText";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authApi = useAuthApi();
  const signInApi = useApi(authApi.signIn);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const loginExtraHandling = async () => {
    const response = await signInApi.request(email, pass);
    if (response.ok) {
      if (response.data.length !== 0) {
        alert("Login Success");
        localStorage.setItem("id", response.data[0].id);
        localStorage.setItem("name", response.data[0].name);
        history.push("/");
        // dispatch(login(response.data[0].id, response.data[0].name));
      } else {
        alert("Wrong name or password");
      }
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <form>
        <FormText _text="Please login to save a cart"></FormText>
        <FormHeader _text="Login"></FormHeader>
        <FormTextInput
          _iconName="envelope"
          _placeHolder="Email"
          _inputType="email"
          _onChange={event => setEmail(event.target.value)}
        ></FormTextInput>
        <FormTextInput
          _iconName="lock"
          _placeHolder="Password"
          _inputType="password"
          _onChange={event => setPass(event.target.value)}
        ></FormTextInput>
        <FormCheckbox _text="Remember me" _onChange={() => {}}></FormCheckbox>
        {signInApi.isLoading && (
          <p className="text text-info text-center">Please Wait...</p>
        )}
        <FormButton
          _text="Login"
          _variant="info my-4"
          _onClick={() => loginExtraHandling()}
        ></FormButton>
      </form>
    </div>
  );
};

export default LoginForm;
