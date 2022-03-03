/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import { useRe } from "react";
import { Header, LogoBox, InputFormWrapper, StyledSubmitButton, StyledWaringMessage } from "../style/Auth";
import { useSelector } from "react-redux";
import * as userAuth from "../state/userAuthSlice";
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
import * as userAgreement from "../state/userAgreementSlice";

const Agreement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const agreementSelector = useSelector((state) => {
    const { agreementList } = state.userAgreement;
    const defaultCheckInputs = {};
    agreementList.forEach((condition) => {
      defaultCheckInputs[condition.title] = false;
    });
    return { agreementList, defaultCheckInputs };
  });

  const [checkInputs, setCheckInputs] = useState(agreementSelector.defaultCheckInputs);
  const [warningMessage, setWarningMessage] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!checkInputs.termsOfService || !checkInputs.privatePolicy) {
      setWarningMessage(true);
      return;
    }
    setWarningMessage(false);
    console.log("checkInputs", checkInputs);
    dispatch(userAuth.setAgreement(checkInputs));
    navigate("/register");
  };

  return (
    <>
      <Header>
        <LogoBox>약관 동의</LogoBox>
      </Header>
      <Container onSubmit={onSubmitHandler}>
        {agreementSelector.agreementList.map((item, idx) => {
          return <Terms key={idx} checkInputs={checkInputs} setCheckInputs={setCheckInputs} {...item}></Terms>;
        })}
        {warningMessage && <StyledWaringMessage>필수항목에 동의해주세요</StyledWaringMessage>}
        <ButtonComponent title="동의" type="submit"></ButtonComponent>
        {/* <button type="submit">동의</button> */}
      </Container>
      <FindComponent>
        <Link to="/">
          <li>로그인</li>
        </Link>
        {/* <Link to="/find/password">
          <li>비밀번호찾기</li>
        </Link>
        <Link to="/agreement">
          <li>회원가입</li>
        </Link> */}
      </FindComponent>
    </>
  );
};
export default Agreement;

const Terms = ({ title, required, text, checkInputs, setCheckInputs }) => {
  const onChangeHandler = (title) => {
    console.log("checkInputs.title", checkInputs[title]);
    checkInputs[title]
      ? setCheckInputs((prev) => ({ ...prev, [title]: false }))
      : setCheckInputs((prev) => ({ ...prev, [title]: true }));
  };
  return (
    <TermsBox>
      <InputCheckbox>
        <Checkbox type="checkbox" checked={checkInputs[title]} onChange={() => onChangeHandler(title)}></Checkbox>
        <TermsTitle onClick={() => onChangeHandler(title)}>
          <TermsTitleText>
            {title} {required ? `(필수사항)` : `(선택사항)`}
          </TermsTitleText>
        </TermsTitle>
      </InputCheckbox>
      <ContentBox>{text}</ContentBox>
    </TermsBox>
  );
};

const Container = styled.form`
    margin: 0 auto;
    max-width: 768px;
    min-width: 460px;
    @media (max-width: 768px) {
        min-width: 220px;
        margin: 0 15px;
    @media (max-width: 1024px) {
        width: auto;
        max-width: 768px;
    }
`;
const TermsBox = styled.div`
  display: block;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TermsTitleText = styled.span`
  margin-left: 20px;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 20px;
`;

const TermsTitle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-left: 30px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  cursor: pointer;
  color: #333;
  box-sizing: border-box;
`;

const InputCheckbox = styled.span`
  position: relative;
  display: block;
  box-sizing: border-box;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ContentBox = styled.div`
  position: relative;
  overflow: auto;
  height: 120px;
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #dadada;
  background: #fff;
  box-sizing: border-box;
`;
