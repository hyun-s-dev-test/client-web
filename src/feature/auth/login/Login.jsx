/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useRef } from "react";
import { Header, LogoBox, InputFormWrapper, SNSloginWrapper } from "../style/Auth";
import { useSelector } from "react-redux";
import * as UserAuth from "../state/userAuthSlice";
import * as UserInfo from "../state/userInfoSlice";
import { request } from "../../../common/api/api";
import { ButtonComponent } from "../component/ButtonComponent";
import { InputComponent } from "../component/InputComponent";
import { InputPassword } from "../component/InputPassword";
import { Link, Navigate } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SNSLogin } from "../component/SNSLogin";

const Login = () => {
  const navigate = useNavigate();
  const userSelector = useSelector((state) => {
    const { id, password } = state.userAuth;
    return { id, password };
  });
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userSelector);
    if (userSelector.id && userSelector.password) {
      console.log("데이터전송");
      //   request.get("url", userSelector).then((data) => {
      //     dispatch(UserInfo.setUserInfo(data));
      //     navigate("/");
      //   });
      //   console.log("userAuth 리셋완료");
      dispatch(UserAuth.resetUserInfo());
      navigate("/user");
      return;
    }

    alert("입력을 정확히!");
    //  ? request.get
  };
  return (
    <>
      <Header>
        <LogoBox>로그인</LogoBox>
      </Header>
      <InputFormWrapper onSubmit={onSubmitHandler}>
        <InputComponent
          name="id"
          type="text"
          placeholder="id를 입력하세요"
          title="id"
          validator="id"
          action={UserAuth.setId}
        ></InputComponent>
        <InputPassword
          name="password"
          placeholder="password"
          title="password"
          type="password"
          validator="password"
          action={UserAuth.setPassword}
        ></InputPassword>
        <ButtonComponent title="제출" type="submit"></ButtonComponent>
      </InputFormWrapper>
      <SNSloginWrapper>
        <SNSLogin text="카카오" url="api/kakao"></SNSLogin>
        <SNSLogin text="구글" url="api/google"></SNSLogin>
      </SNSloginWrapper>
      <FindComponent>
        <Link to="/find/id">
          <li>아이디찾기</li>
        </Link>
        <Link to="/find/password">
          <li>비밀번호찾기</li>
        </Link>
        <Link to="/agreement">
          <li>회원가입</li>
        </Link>
      </FindComponent>
    </>
  );
};

export default Login;
