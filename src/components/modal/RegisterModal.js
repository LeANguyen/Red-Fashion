import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";

import $ from "jquery";
import * as authApi from "../../APIs/authApi";

import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";
import Space from "../common/Space";

import styles from "./LoginModal.module.scss";
import ContainerCss from "../common/Container.module.scss";
import HeaderCss from "../Header.module.scss";

const LoginModal = () => {
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
    <div id="registerModal" className="modal fade overflow-auto">
      <div className="modal-dialog">
        <div className={`modal-content ${ContainerCss["body"]}`}>
          <div className={`modal-header ${ContainerCss["header"]}`}>
            <h4 className={ContainerCss["title"]}>
              <i className="fa fa-sign-in"></i>
              <Space></Space>
              <Space></Space>Register
            </h4>
            <button
              className={styles["close-btn"]}
              onClick={() => $("#registerModal").modal("hide")}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="modal-body modal-single text-center">
            <h1 className={HeaderCss["logo"]}>Fashion</h1>
            <br></br>
            <br></br>
            <Input
              _iconName="envelope"
              _placeholder="Email"
              _wrapperClass="input-1"
              _onChange={event => setEmail(event.target.value)}
            ></Input>
            <br></br>
            <Input
              _iconName="user"
              _placeholder="Name"
              _wrapperClass="input-1"
              _onChange={event => setName(event.target.value)}
            ></Input>
            <br></br>
            <Input
              _iconName="map-marker"
              _placeholder="Address"
              _wrapperClass="input-1"
              _onChange={event => setAddress(event.target.value)}
            ></Input>
            <br></br>
            <Input
              _iconName="lock"
              _placeholder="Password"
              _wrapperClass="input-1"
              _inputType="password"
              _onChange={event => setPassword(event.target.value)}
            ></Input>
            <br></br>
            <Checkbox _className="text-white">
              Please agree to the Terms of Use & Privacy Policy
            </Checkbox>
            <br></br>
            <Button
              _onClick={() => registerHanling()}
              _className="btn-yellow btn-block"
              _loading={registerApi.loading || loginApi.loading}
            >
              Register
            </Button>
            <br></br>
            <span className="text-pink text-center">
              Already have an account?
            </span>
            <br></br>
            <br></br>
            <Button
              _className="btn-pink btn-block"
              _onClick={() => {
                $("#registerModal").modal("hide");
                $("#loginModal").modal("show");
              }}
            >
              Login
            </Button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
