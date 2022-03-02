/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useRe } from "react";
import { Header, LogoBox, InputFormWrapper, UserInfoContentBox, StyledSubmitButton } from "../style/Auth";
import { useSelector } from "react-redux";
import * as userAuth from "../state/userAuthSlice";
import * as userInfo from "../state/userInfoSlice";
import { request } from "../../../common/api/api";
import { ButtonComponent } from "../component/ButtonComponent";
import { InputComponent } from "../component/InputComponent";
import { UserInfoContentComponent } from "../component/UserInfoContentComponent";
import { Link } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";
import styled from "@emotion/styled";
import { BirthInput } from "../register/BirthInputComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserInfo = () => {
  const navigate = useNavigate();
  const userSelector = useSelector((state) => {
    const userInfo = state.userInfo;
    return { userInfo };
  });

  const { name, id, email, password, phone, year, month, day, gender } = userSelector.userInfo;
  const birth = `${year}년 ${month}월 ${day}일`;
  const dispatch = useDispatch();
  const onClickHandler = () => {
    navigate("/user/update");
  };
  return (
    <>
      <Header>
        <LogoBox>{name}님의 정보입니다.</LogoBox>
      </Header>
      <InputContentWrapper>
        <UserInfoContentComponent title="name" content={name}></UserInfoContentComponent>
        <UserInfoContentComponent title="id" content={id}></UserInfoContentComponent>
        <UserInfoContentComponent title="email" content={email}></UserInfoContentComponent>
        <UserInfoContentComponent title="phone" content={phone}></UserInfoContentComponent>
        <UserInfoContentComponent title="birth" content={birth}></UserInfoContentComponent>
        <UserInfoContentComponent title="gender" content={gender}></UserInfoContentComponent>
        <StyledSubmitButton onClick={onClickHandler}>
          <span>수정하기</span>
        </StyledSubmitButton>
      </InputContentWrapper>
      <FindComponent>
        <Link to="/">
          <li>로그인</li>
        </Link>
      </FindComponent>
    </>
  );
};

export default UserInfo;

const InputContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  box-sizing: border-box;
  width: 460px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
