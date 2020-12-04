import React from "react";
import Screen from "../components/Screen";
import LoginForm from "../components/SignInForm";
import RegisterForm from "../components/SignUpForm";
const SignScreen = () => {
  return (
    <Screen>
      <div class="row py-5 p-4 bg-white rounded shadow-sm m-5 text-align-center">
        <div class="col-lg-6">
          <LoginForm></LoginForm>
        </div>

        <div class="col-lg-6">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </Screen>
  );
};

export default SignScreen;
