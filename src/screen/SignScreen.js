import React from "react";
import Screen from "../components/Screen";
import LoginForm from "../components/SignInForm";
import RegisterForm from "../components/SignUpForm";
const SignScreen = () => {
  return (
    <Screen>
      <div className="row p-md-5">
        <div className="col-md-2"></div>
        <div class="col-lg-8 p-4 my-5 bg-white rounded shadow-sm text-align-center">
          <LoginForm></LoginForm>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-2"></div>
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm text-align-center">
          <RegisterForm></RegisterForm>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </Screen>
  );
};

export default SignScreen;
