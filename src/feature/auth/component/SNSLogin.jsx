import { jsx } from "@emotion/react";
import { SNSLoginButton } from "../style/Auth";

export const SNSLogin = ({ text, url }) => {
  const onClickHandler = () => {
    alert("api연결해");
  };
  return (
    <>
      <SNSLoginButton onClick={onClickHandler}>
        <span>{text}</span>
      </SNSLoginButton>
    </>
  );
};
