import React, { useState } from "react";
import AppTextInput from "../common/AppInput";
import Button from "../common/Button";

import $ from "jquery";
import authApi from "../../api/authApi";

import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";
import Space from "../common/Space";
import logo from "../../assets/logo.png";

const LoginModal = ({ _id }) => {
  const auth = useAuth();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [policyAgree, setPoilicyAgree] = useState(false);

  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);

  const registerHanling = async () => {
    const response = await registerApi.request(email, name, address, password);
    if (response.ok) {
      alert("Register Success");
      loginHandling();
    } else {
      alert("Register Failed");
    }
  };

  const loginHandling = async () => {
    const response = await loginApi.request(email, password);
    if (response.ok) {
      if (response.data.length !== 0) {
        alert("Login Success");
        auth.login(response.data.access_token);
        // $("#registerModal").modal("hide");
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
              <Space></Space>Register
            </h4>
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body modal-single text-center">
            <br></br>
            <img src={logo} className="bg-dark p-4 rounded"></img>
            <br></br>
            <br></br>
            <br></br>
            <AppTextInput
              _iconName="envelope"
              _placeholder="Email"
              _roundedPill
              _onChange={event => setEmail(event.target.value)}
            ></AppTextInput>
            <br></br>
            <AppTextInput
              _iconName="user"
              _placeholder="Name"
              _roundedPill
              _onChange={event => setName(event.target.value)}
            ></AppTextInput>
            <br></br>
            <AppTextInput
              _iconName="map-marker"
              _placeholder="Address"
              _roundedPill
              _onChange={event => setAddress(event.target.value)}
            ></AppTextInput>
            <br></br>
            <AppTextInput
              _iconName="lock"
              _placeholder="Password"
              _roundedPill
              _inputType="password"
              _onChange={event => setPassword(event.target.value)}
            ></AppTextInput>
            <br></br>
            {/* <AppCheckbox _text="Please agree to the Terms of Use & Privacy Policy"></AppCheckbox> */}
            <Button
              _text="Register"
              _variant="danger"
              _block
              _onClick={() => registerHanling()}
              _loading={registerApi.loading || loginApi.loading}
            ></Button>
            <br></br>
            <span className="text-muted text-center">
              Already have an account?
            </span>
            <br></br>
            <br></br>
            <Button
              _text="Login"
              _variant="outline-danger"
              _block
              _onClick={() => {
                $("#registerModal").modal("hide");
                $("#loginModal").modal("show");
              }}
            ></Button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
