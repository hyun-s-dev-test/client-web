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
import { Link, Navigate } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SNSLogin } from "../component/SNSLogin";

const MessageComponent = ({ isOk, title, content, isMessageOn, setIsMessageOn, isPw }) => {
  const onCloseModalHandler = () => {
    setIsMessageOn(false);
  };
  console.log("isOk", isPw);
  return (
    <MessageWrapper isMessageOn={isMessageOn}>
      <ModalBackground onClick={onCloseModalHandler}></ModalBackground>
      <CloseButton onClick={onCloseModalHandler}></CloseButton>
      <MessageBox isOk={isOk}>
        <div>{title}</div>
        <div>{content} 입니다.</div>
        <Link to="/">
          <div>로그인</div>
        </Link>
        {!isPw ? (
          <Link to="/find/id">
            <div>아이디찾기</div>
          </Link>
        ) : (
          <Link to="/find/password">
            <div>비밀번호찾기</div>
          </Link>
        )}
        <Link to="/register">
          <div>회원가입</div>
        </Link>
      </MessageBox>
    </MessageWrapper>
  );
};

export default MessageComponent;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MessageBox = styled.div`
  position: fixed;
  top: 100px;
  height: 300px;
  padding: 30px;
  border-radius: 11px;
  text-align : center;
  font-weight: 900;

    width: 460px;
    margin: 0 auto;
    background-color: white;
    color: ${(props) => (props.isOk === true ? "#03c75a" : "gray")};
    font-size: 1.4rem;
    div {
        margin-top : 10px;
    }
    a {
          text-decoration: none;
    }
      @media (max-width: 600px) {
    width: 100%;

`;

const MessageWrapper = styled.div`
  display: ${(props) => (props.isMessageOn === true ? "flex" : "none")};
  z-index: 10000;
  justify-content: center;
`;

const CloseButton = styled.div`
  position: absolute;
  background-color: gray;
  width: 28px;
  height: 28px;
  top: 20px;
  right: 20px;
`;
