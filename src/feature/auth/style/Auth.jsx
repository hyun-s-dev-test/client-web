import styled from "@emotion/styled";

export const Header = styled.div`
  padding-bottom: 48px;
  box-sizing: border-box;
  text-align: center;
`;
export const InputFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  box-sizing: border-box;
  width: 460px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const LogoBox = styled.div`
  display: inline-block;
  margin-top: 108px;
  vertical-align: top;
  background-position: 0 -51px;
  background-repeat: no-repeat;
  width: 155px;
  height: 30px;
  text-align: center;
`;
export const StyledInput = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 50px;
  border: 1px solid #dcd9d9;
  border-radius: 6px;
  position: relative;
  margin-bottom: 20px;

  padding: 13px 0 13px 10px;
  box-sizing: border-box;
  + input {
    margin-top: 10px;
  }
  :focus {
    outline: 1px solid #03c75a;
  }
`;
export const StyledWaringMessage = styled.div`
  font-size: 0.8rem;
  width: 100%;
  position: relative;
  color : red;
  text-align : center;

  box-sizing: border-box;
  }
`;
export const StyledTitle = styled.label`
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 5px;

  span {
    margin-left: 10px;
  }
`;
export const InputComponentWrapper = styled.div`
  display: relative;
  width: 100%;
  + div {
    margin-top: 20px;
  }
`;

export const StyledSubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 13px 0 13px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #03c75a;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 20px;
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
  }
`;
