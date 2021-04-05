import React, { useState } from "react";
import AppButton from "../common/AppButton";
import $ from "jquery";
import authApi from "../../api/authApi";
import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";
import AppInput from "../common/AppInput";
import logo from "../../assets/logo.png";
import Space from "../common/Space";

const LoginModal = ({ _id }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginApi = useApi(authApi.login);
  const auth = useAuth();

  const loginHandling = async () => {
    const response = await loginApi.request(email, password);
    if (response.ok) {
      if (response.data.length !== 0) {
        alert("Login Success");
        auth.login(response.data);
        window.location.reload(false);
      } else {
        alert("Invalid name or password");
      }
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div id={_id} className="modal fade overflow-auto">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>
              <i className="fa fa-sign-in"></i>
              <Space></Space>
              <Space></Space>Login
            </h4>
            <button className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body modal-single text-center">
            <br></br>
            <img src={logo} className="bg-dark p-4 rounded"></img>
            <br></br>
            <br></br>
            <br></br>
            <AppInput
              _iconName="envelope"
              _placeholder="Email"
              _roundedPill
              _onChange={event => setEmail(event.target.value)}
            ></AppInput>
            <br></br>
            <AppInput
              _iconName="lock"
              _placeholder="Password"
              _roundedPill
              _inputType="password"
              _onChange={event => setPassword(event.target.value)}
            ></AppInput>
            <br></br>
            <br></br>
            <AppButton
              _text="Login"
              _variant="danger"
              _block
              _loading={loginApi.loading}
              _onClick={() => loginHandling()}
            ></AppButton>
            <br></br>
            <span className="text-muted text-center">
              Don't have an account?
            </span>
            <br></br>
            <br></br>
            <AppButton
              _text="Register"
              _variant="outline-danger"
              _block={true}
              _onClick={() => {
                $("#loginModal").modal("hide");
                $("#registerModal").modal("show");
              }}
            ></AppButton>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
