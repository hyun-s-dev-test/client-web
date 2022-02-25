import { jsx } from "@emotion/react";
import { StyledSubmitButton } from "../style/Auth";

export const ButtonComponent = ({ title, type }) => {
  return (
    <StyledSubmitButton type={type}>
      <span>{title}</span>
    </StyledSubmitButton>
  );
};
