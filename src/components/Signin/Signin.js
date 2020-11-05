// import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register, singin } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";

import {
  Form,
  FormContent,
  FormH1,
  // FormWrap,
  NavH1,
  SigninContainer,
  SigninNav,
  FormEle,
  FormBtn,
} from "./SigninEle";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: loadingRegister, err: errRegister } = userRegister;

  const userSignin = useSelector((state) => state.userSignin);
  const { loading: loadingSignin, userInfo, err: errSignin } = userSignin;

  const disptach = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      //로그인하기
      disptach(singin(email, password));
    } else {
      disptach(register(email, password, name));
    }
  };
  return (
    <SigninContainer>
      <SigninNav to="/">
        <NavH1>home</NavH1>
      </SigninNav>

      <FormContent>
        <Form onSubmit={onSubmitHandler}>
          <FormH1>LOG IN</FormH1>
          {loadingRegister && <h1>loading...</h1>}
          {errRegister && <h1>{errRegister}</h1>}
          {loadingSignin && <h1>loading...</h1>}
          {errSignin && <h1>{errSignin}</h1>}

          <FormEle>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormEle>
          <FormEle>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormEle>
          {!isLogin && (
            <FormEle>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormEle>
          )}
          <FormBtn>{isLogin ? "login" : "register"}</FormBtn>
          <span onClick={() => setIsLogin((prev) => !prev)}>toogle login</span>
        </Form>
      </FormContent>
    </SigninContainer>
  );
};

export default Signin;

// https://colorlib.com/etc/lf/Login_v3/index.html 템플릿
