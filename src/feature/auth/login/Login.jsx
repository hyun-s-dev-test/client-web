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
import { Cookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const userSelector = useSelector((state) => {
    const { id, password } = state.userAuth;
    return { id, password };
  });
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(userSelector);
    if (userSelector.id && userSelector.password) {
      console.log("데이터전송");
      const data = { id: userSelector.id, password: userSelector.password };
      const url = "/api/user/login";
      try {
        const response = await request.post(url, data);
        console.log("response", response);
        Cookies.set("userId", response.data);
        localStorage.setItem("userId", response.data);
        alert("로그인 성공!");
        navigate("/user");
      } catch (err) {
        console.error(err);
        alert("로그인이 실패하였습니다.");
        return;
      }

      dispatch(UserAuth.resetUserInfo());
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
