import { jsx } from "@emotion/react";
import { useState } from "react";
import { InputComponentWrapper, StyledTitle, StyledInput, StyledWaringMessage } from "../style/Auth";
import { validateInput } from "../util/validateInput";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

export const InputPassword = ({ name, type, placeholder, title, validator, action, defaultValue, ...last }) => {
  const [inputValue, setInputValue] = useState("");
  const [warningToggle, setWarningToggle] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onBlurHandler = () => {
    setWarningToggle(true);
    validation?.isValid ? dispatch(action(inputValue)) : dispatch(action(null));
  };
  const onFocusHandler = () => {
    setWarningToggle(false);
  };

  const onClickHandler = () => {
    setHidePassword(!hidePassword);
  };
  //name --> email, id, password, name, phone
  //   const validation = validateInput().name(inputValue);
  const validation = validateInput(validator)?.(inputValue);

  console.log("validation", validation);

  return (
    <InputComponentWrapper>
      <StyledTitle>
        {/* <span>{title}</span> */}
        {title}
      </StyledTitle>
      <PasswordButton>
        <span onClick={onClickHandler}>비밀번호 보기</span>
      </PasswordButton>
      <StyledInput
        name={name}
        placeholder={placeholder}
        value={inputValue}
        type={hidePassword ? "password" : "text"}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></StyledInput>
      {warningToggle && !validation?.isValid ? <StyledWaringMessage>{validation?.message}</StyledWaringMessage> : <></>}
    </InputComponentWrapper>
  );
};

const PasswordButton = styled.div`
  position: relative;
  z-index: 10;
  text-align: right;
  span {
    cursor: pointer;
  }
`;
