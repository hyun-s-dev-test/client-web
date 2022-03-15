/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useEffect } from "react";
import { useRe } from "react";
import { Header, LogoBox, InputFormWrapper } from "../style/Auth";
import { useSelector } from "react-redux";
import * as userAuth from "../state/userAuthSlice";
import * as userInfo from "../state/userInfoSlice";
import { request } from "../../../common/api/api";
import { ButtonComponent } from "../component/ButtonComponent";
import { InputComponent } from "../component/InputComponent";
import { InputPassword } from "../component/InputPassword";
import { Link } from "react-router-dom";
import { FindComponent } from "../component/FindComponent";
import styled from "@emotion/styled";
import { BirthInput } from "./BirthInputComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const userSelector = useSelector((state) => {
    const userRegisterInfo = state.userAuth;
    return { userRegisterInfo };
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return dispatch(userAuth.resetUserInfo());
  // }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(userSelector);
    const data = {};
    for (const [key, value] of Object.entries(userSelector.userRegisterInfo)) {
      if (!value) {
        alert(`${key} , 빈 값을 채워주세요.`);
        // break;
        return;
      }
      data[key] = value;
      const birth = `${data.year}-${data.month}-${data.day}`;
      data.birth = birth;
    }
    console.log("data", data);
    try {
      // const response = await dispatch(userInfo.postUser({ url: "api/user", data })).unwrap();
      // console.log(response);
      dispatch(userInfo.setUserInfo(data));
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("중복된 id입니다.");
      return;

      // handle error here
    }
    console.log("패칭성공");
    // localStorage.setItem({userId : })
    // request.post("url", data).then((res) => {
    //   if (res.status === 200) {
    //     alert("로그인성공");
    //     navigate("login");
    //   }
    // });
  };
  return (
    <>
      <Header>
        <LogoBox>회원 가입</LogoBox>
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
        <InputPassword
          name="password"
          placeholder="password"
          title="비밀번호"
          type="password"
          validator="password"
          action={userAuth.setPassword}
        ></InputPassword>
        <InputComponent
          name="name"
          placeholder="name"
          title="이름"
          type="text"
          validator="name"
          action={userAuth.setName}
        ></InputComponent>
        <InputComponent
          name="gender"
          placeholder="gender"
          title="성별"
          type="text"
          validator="gender"
          action={userAuth.setGender}
        ></InputComponent>
        <InputComponent
          name="phone"
          placeholder="phone"
          title="휴대전화"
          type="text"
          validator="phone"
          action={userAuth.setPhone}
        ></InputComponent>
        <BirthInput></BirthInput>
        <ButtonComponent title="제출" type="submit"></ButtonComponent>
      </InputFormWrapper>
      <FindComponent>
        {/* <Link to="/">
          <li>아이디찾기</li>
        </Link>
        <Link to="/">
          <li>비밀번호찾기</li>
        </Link> */}
        <Link to="/">
          <li>로그인</li>
        </Link>
      </FindComponent>
    </>
  );
};

export default Register;

export const CalenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  div:not(:first-of-type) {
    margin-left: 20px;
  }
`;
