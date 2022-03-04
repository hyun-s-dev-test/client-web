// import { jsx } from "@emotion/react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { validateInput } from "../util/validateInput";
import { InputComponentWrapper, StyledTitle, StyledInput, StyledWaringMessage } from "../style/Auth";

export const InputBirthComponent = ({
  name,
  type,
  placeholder,
  title,
  inputValue,
  setInputValue,
  setWarningToggle,
}) => {
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onBlurHandler = (e) => {
    setWarningToggle(true);
  };
  const onFocusHandler = () => {
    setWarningToggle(false);
  };

  return (
    <InputComponentWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput
        name={name}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></StyledInput>
    </InputComponentWrapper>
  );
};
