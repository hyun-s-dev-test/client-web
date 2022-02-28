// export const validateInput = (type) => {

//   const email = (input) => {
//     const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//     const isValid = regex.test(input);
//     const message = isValid ? "" : "올바른 이메일 형식이 아닙니다.";
//     return { isValid, message };
//   };
//   const password = (input) => {
//     const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

//     const isValid = regex.test(input);
//     const message = isValid ? "" : "특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내로 입력해주세요";
//     return { isValid, message };
//   };
//   const id = (input) => {
//     const regex = /^[A-Za-z0-9]{8,15}$/;
//     const isValid = regex.test(input);
//     const message = isValid ? "" : "숫자와 문자 포함 형태의 6~12자리 이내의 값을 입력해주세요.";
//     return { isValid, message };
//   };
//   const phone = (input) => {
//     const regex = /^\d{3}-\d{3,4}-\d{4}$/;
//     const regexWithoutHyphen = /\d{11}/;
//     const isValid = regex.test(input) || regexWithoutHyphen.test(input);
//     const message = isValid ? "" : "올바른 자리수의 폰번호가 아닙니다.";
//     return { isValid, message };
//   };
//   const name = (input) => {
//     const regex = /^[가-힣a-zA-Z]+$/;
//     const isValid = regex.test(input);
//     const message = isValid ? "" : "한글과 영문만 입력이 가능합니다.";
//     return { isValid, message };
//   };

//   return { password, id, email, name, phone };
// };

export const validateInput = (type) => {
  const email = (input) => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const isValid = regex.test(input);
    const message = isValid ? "" : "올바른 이메일 형식이 아닙니다.";
    return { isValid, message };
  };
  const password = (input) => {
    const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    const isValid = regex.test(input);
    const message = isValid ? "" : "특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내로 입력해주세요";
    return { isValid, message };
  };
  const id = (input) => {
    const regex = /^[A-Za-z0-9]{8,15}$/;
    const isValid = regex.test(input);
    const message = isValid ? "" : "숫자와 문자 포함 형태의 6~12자리 이내의 값을 입력해주세요.";
    return { isValid, message };
  };
  const phone = (input) => {
    const regex = /^\d{3}-\d{3,4}-\d{4}$/;
    const regexWithoutHyphen = /^\d{11}$/;
    const isValid = regex.test(input) || regexWithoutHyphen.test(input);
    const message = isValid ? "" : "올바른 자리수의 폰번호가 아닙니다.";
    return { isValid, message };
  };
  const name = (input) => {
    const regex = /^[가-힣a-zA-Z]+$/;
    const isValid = regex.test(input);
    const message = isValid ? "" : "한글과 영문만 입력이 가능합니다.";
    return { isValid, message };
  };

  return type === "email"
    ? email
    : type === "id"
    ? id
    : type === "password"
    ? password
    : type === "name"
    ? name
    : type === "phone"
    ? phone
    : null;
  //   return { password, id, email, name, phone };
};
