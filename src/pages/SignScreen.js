import React from "react";
import Screen from "../components/Screen";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
const SignScreen = () => {
  return (
    <Screen>
      <div className="row p-md-5">
        <div className="col-md-3"></div>
        <div class="col-lg-6 p-4 my-4 bg-white rounded shadow-sm text-align-center">
          <LoginForm></LoginForm>
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
        <div class="col-lg-6 p-4 my-4 bg-white rounded shadow-sm text-align-center">
          <RegisterForm></RegisterForm>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </Screen>
  );
};

export default SignScreen;
