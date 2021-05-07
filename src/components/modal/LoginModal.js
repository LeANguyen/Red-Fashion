import React, { useState } from "react";
import Button from "../common/Button";
import $ from "jquery";
import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";
import Input from "../common/Input";
import Space from "../common/Space";
import * as authApi from "../../APIs/authApi";
import styles from "./LoginModal.module.scss";
import ContainerCss from "../common/Container.module.scss";
import HeaderCss from "../Header.module.scss";

const LoginModal = () => {
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
    <div id="loginModal" className="modal fade overflow-auto">
      <div className="modal-dialog">
        <div className={`modal-content ${ContainerCss["body"]}`}>
          <div className={`modal-header ${ContainerCss["header"]}`}>
            <h4 className={ContainerCss["title"]}>
              <i className="fa fa-sign-in"></i>
              <Space></Space>
              <Space></Space>Login
            </h4>
            <button
              className={styles["close-btn"]}
              onClick={() => $("#loginModal").modal("hide")}
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
              _onChange={event => setEmail(event.target.value)}
              _wrapperClass="input-1"
            ></Input>
            <br></br>
            <Input
              _iconName="lock"
              _placeholder="Password"
              _roundedPill
              _inputType="password"
              _onChange={event => setPassword(event.target.value)}
              _wrapperClass="input-1"
            ></Input>
            <br></br>
            <br></br>
            <Button
              _loading={loginApi.loading}
              _onClick={() => loginHandling()}
              _className="btn-yellow btn-block"
            >
              Login
            </Button>
            <br></br>
            <span className="text-pink text-center">
              Don't have an account?
            </span>
            <br></br>
            <br></br>
            <Button
              _onClick={() => {
                $("#loginModal").modal("hide");
                $("#registerModal").modal("show");
              }}
              _className="btn-pink btn-block"
            >
              Register
            </Button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
