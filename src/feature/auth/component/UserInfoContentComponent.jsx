import { jsx } from "@emotion/react";
import { useState } from "react";
import {
  InputComponentWrapper,
  StyledTitle,
  StyledInput,
  StyledWaringMessage,
  UserInfoContentBox,
} from "../style/Auth";
import { validateInput } from "../util/validateInput";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

export const UserInfoContentComponent = ({ title, content }) => {
  return (
    <InputComponentWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </InputComponentWrapper>
  );
};

const Title = styled.div`
  display: inline-box;
  width: 50px;
  font-size: 1.4rem;
  font-weight: 800;
  position: relative;
  margin-right: 10px;
  height: 50px;
`;

const Content = styled.div`
  display: inline-box;
  font-size: 1rem;
  width: 100%;
  height: 50px;
  position: relative;
`;
