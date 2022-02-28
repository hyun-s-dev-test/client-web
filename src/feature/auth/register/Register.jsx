/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useRef } from "react";
import { Header, LogoBox, InputFormWrapper, StyledWaringMessage } from "../style/Auth";
import { useDispatch, useSelector } from "react-redux";
import * as userAuth from "../state/userAuthSlice";
import { request } from "../../../common/api/api";
import { ButtonComponent } from "../component/ButtonComponent";
import { InputComponent } from "../component/InputComponent";
import { Link } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";
import styled from "@emotion/styled";
import { getDay } from "../util/getDay";

const Login = () => {
  const userSelector = useSelector((state) => {
    const { id, password } = state.userAuth;
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
          title="아이디"
          validator="id"
          action={userAuth.setId}
        ></InputComponent>
        <InputComponent
          name="password"
          placeholder="password"
          title="비밀번호"
          type="password"
          validator="password"
          action={userAuth.setPassword}
        ></InputComponent>
        <InputComponent
          name="name"
          placeholder="name"
          title="이름"
          type="text"
          validator="name"
          action={userAuth.setName}
        ></InputComponent>
        <InputComponent
          name="sex"
          placeholder="sex"
          title="성별"
          type="text"
          validator=""
          action={userAuth.setSex}
        ></InputComponent>
        <InputComponent
          name="phone"
          placeholder="phone"
          title="휴대전화"
          type="text"
          validator="phone"
          action={userAuth.setSex}
        ></InputComponent>
        <CalenderInput>
          <InputComponent
            name="year"
            placeholder="1999"
            title="태어난 년"
            type="text"
            validator="year"
            action={userAuth.setYear}
          ></InputComponent>
          <InputComponent
            name="month"
            placeholder="3"
            title="월"
            type="text"
            validator="month"
            action={userAuth.setMonth}
          ></InputComponent>
          <InputComponent
            name="day"
            placeholder="21"
            title="일"
            type="text"
            validator="day"
            action={userAuth.setDay}
          ></InputComponent>
        </CalenderInput>
        <ButtonComponent title="제출" type="submit"></ButtonComponent>
      </InputFormWrapper>
      <FindComponent>
        <Link to="/">
          <li>아이디찾기</li>
        </Link>
        <Link to="/">
          <li>비밀번호찾기</li>
        </Link>
        <Link to="/">
          <li>로그인</li>
        </Link>
      </FindComponent>
    </>
  );
};

export default Login;

const CalenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  div:not(:first-of-type) {
    margin-left: 20px;
  }
`;

const CalenderInput = ({ children }) => {
  const dispatch = useDispatch();
  const userBirthSelector = useSelector((state) => {
    const { year, month, day } = state.userAuth;
    return { year, month, day };
  });
  const lastDay = getDay(userBirthSelector.year, userBirthSelector.month);
  const { year, month, day } = userBirthSelector;
  //   if (Number(lastDay.day) < Number(userBirthSelector.day)) {
  //     dispatch(userAuth.setDay(null));
  //   }

  return (
    <>
      <CalenderWrapper>{children}</CalenderWrapper>
      {Number(lastDay.day) < Number(day) ? (
        <StyledWaringMessage className="doosan">올바른 날짜가 아닙니다.</StyledWaringMessage>
      ) : (
        <></>
      )}
    </>
  );
};
