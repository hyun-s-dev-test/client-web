import { jsx } from "@emotion/react";
import { useState } from "react";
import { InputComponentWrapper, StyledTitle, StyledInput, StyledWaringMessage } from "../style/Auth";
import { useDispatch } from "react-redux";
import { validateInput } from "../util/validateInput";

export const InputComponent = ({ name, type, placeholder, title, validator, action }) => {
  const [inputValue, setInputValue] = useState("");
  const [warningToggle, setWarningToggle] = useState(false);
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
      <StyledInput
        name={name}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></StyledInput>
      {warningToggle && !validation?.isValid ? <StyledWaringMessage>{validation?.message}</StyledWaringMessage> : <></>}
    </InputComponentWrapper>
  );
};
