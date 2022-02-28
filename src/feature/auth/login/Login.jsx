/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useRef } from "react";
import { Header, LogoBox, InputFormWrapper } from "../style/Auth";
import { useSelector } from "react-redux";
import * as A from "../state/userInfoSlice";
import { request } from "../../../common/api/api";
import { ButtonComponent } from "../component/ButtonComponent";
import { InputComponent } from "../component/InputComponent";
import { Link } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";

const Login = () => {
  const userSelector = useSelector((state) => {
    const { id, password } = state.userInfo;
    return { id, password };
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userSelector);
    userSelector.id && userSelector.password ? console.log("데이터전송") : alert("입력을 정확히!");
    //  ? request.get
  };
  return (
    <>
      <Header>
        <LogoBox>두산</LogoBox>
      </Header>
      <InputFormWrapper onSubmit={onSubmitHandler}>
        <InputComponent
          name="id"
          type="text"
          placeholder="id를 입력하세요"
          title="id"
          validator="id"
          action={A.setId}
        ></InputComponent>
        <InputComponent
          name="password"
          placeholder="password"
          title="password"
          type="password"
          validator="password"
          action={A.setPassword}
        ></InputComponent>
        <ButtonComponent title="제출" type="submit"></ButtonComponent>
      </InputFormWrapper>
      <FindComponent>
        <Link to="/">
          <li>아이디찾기</li>
        </Link>
        <Link to="/">
          <li>비밀번호찾기</li>
        </Link>
        <Link to="/register">
          <li>회원가입</li>
        </Link>
      </FindComponent>
    </>
  );
};

export default Login;
