import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledWaringMessage } from "../style/Auth";
import { useDispatch } from "react-redux";
import * as userAuth from "../state/userAuthSlice";
import { getDay } from "../util/getDay";
import { InputBirthComponent } from "../component/InputBirthComponent";
import { validateInput } from "../util/validateInput";
import { CalenderWrapper } from "./Register";

export const BirthInput = ({ defaultValue }) => {
  const dispatch = useDispatch();
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [warningToggle, setWarningToggle] = useState(false);
  const [validBirth, setValidBirth] = useState(false);

  const lastDay = getDay(birthYear, birthMonth);
  const yearValidation = validateInput("year")?.(birthYear);
  const monthValidation = validateInput("month")?.(birthMonth);
  const dayValidation = validateInput("day")?.(birthDay);

  useEffect(() => {
    if (
      yearValidation.isValid &&
      monthValidation.isValid &&
      dayValidation.isValid &&
      !(Number(lastDay.day) < Number(birthDay))
    )
      dispatch(userAuth.setDate({ year: birthYear, month: birthMonth, day: birthDay }));
  }, [birthDay, birthMonth, birthYear]);

  console.log("birthMonth", birthMonth);
  console.log("monthValidation", monthValidation);

  return (
    <>
      <CalenderWrapper>
        <InputBirthComponent
          name="year"
          placeholder="1999"
          title="생년"
          type="text"
          defaultValue={defaultValue?.year}
          inputValue={birthYear}
          setInputValue={setBirthYear}
          setWarningToggle={setWarningToggle}
        ></InputBirthComponent>
        <InputBirthComponent
          name="month"
          placeholder="3"
          title="월"
          type="text"
          defaultValue={defaultValue?.month}
          inputValue={birthMonth}
          setInputValue={setBirthMonth}
          setWarningToggle={setWarningToggle}
        ></InputBirthComponent>
        <InputBirthComponent
          name="day"
          placeholder="21"
          title="일"
          type="text"
          defaultValue={defaultValue?.day}
          inputValue={birthDay}
          setInputValue={setBirthDay}
          setWarningToggle={setWarningToggle}
        ></InputBirthComponent>
      </CalenderWrapper>
      {warningToggle ? (
        !yearValidation.isValid ? (
          <StyledWaringMessage>{yearValidation.message}</StyledWaringMessage>
        ) : !monthValidation.isValid ? (
          <StyledWaringMessage>{monthValidation.message}</StyledWaringMessage>
        ) : !dayValidation.isValid ? (
          <StyledWaringMessage>{dayValidation.message}</StyledWaringMessage>
        ) : Number(lastDay.day) < Number(birthDay) ? (
          <StyledWaringMessage className="doosan">올바른 날짜가 아닙니다.</StyledWaringMessage>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
};
