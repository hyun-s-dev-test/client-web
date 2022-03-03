/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useRef, useState } from "react";
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
import MessageModal from "../component/MessageModal";

const FindPw = () => {
  const [isOk, setIsOk] = useState(true);
  const [isMessageOn, setIsMessageOn] = useState(false);
  const [userPw, setUserPw] = useState("");
  const navigate = useNavigate();
  const userSelector = useSelector((state) => {
    const { id, phone } = state.userAuth;
    return { id, phone };
  });
  const { id, phone } = useSelector;
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("userSelector", userSelector);
    if (userSelector.id && userSelector.phone) {
      console.log("데이터전송");
      //   request.get("url", userSelector).then((data) => {
      //     dispatch(UserInfo.setUserInfo(data));
      //     navigate("/");
      //   });
      //   console.log("userAuth 리셋완료");
      setIsMessageOn(true);
      console.log("isMessageOn", isMessageOn);
      setIsOk(true);

      dispatch(UserAuth.resetUserInfo());

      return;
    }
  };
  return (
    <>
      {isMessageOn ? (
        <MessageModal
          setIsMessageOn={setIsMessageOn}
          isMessageOn={isMessageOn}
          setIsOk={true}
          title="당신의 비밀번호는,"
          content={userPw}
          isPw={true}
        ></MessageModal>
      ) : (
        <>
          <Header>
            <LogoBox>비밀번호찾기</LogoBox>
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
            <InputComponent
              name="phone"
              placeholder="phone"
              title="phone"
              type="text"
              validator="phone"
              action={UserAuth.setPhone}
            ></InputComponent>
            <ButtonComponent title="제출" type="submit"></ButtonComponent>
          </InputFormWrapper>
          {/* <SNSloginWrapper>
            <SNSLogin text="카카오" url="api/kakao"></SNSLogin>
            <SNSLogin text="구글" url="api/google"></SNSLogin>
          </SNSloginWrapper> */}
          <FindComponent>
            <Link to="/">
              <li>로그인</li>
            </Link>
            <Link to="/find/id">
              <li>아이디찾기</li>
            </Link>
            <Link to="/agreement">
              <li>회원가입</li>
            </Link>
          </FindComponent>
        </>
      )}
    </>
  );
};

export default FindPw;
