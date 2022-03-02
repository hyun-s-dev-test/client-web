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

import { getDay } from "./getDay";

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
  const year = (input) => {
    const numYear = Number(input) || 0;
    const isValid = numYear <= 999 ? false : numYear >= new Date().getFullYear() ? false : true;
    const message = isValid ? "" : "올바른 년도의 숫자 네자리를 넣어주세요";
    return { isValid, message };
  };
  const month = (input) => {
    const numMonth = Number(input) || 0;
    const isValid = numMonth <= 0 ? false : numMonth > 12 ? false : true;
    const message = isValid ? "" : "올바른 월의 숫자를 넣어주세요. 예) 3월의 경우 3을 입력해주세요.";
    return { isValid, message };
  };
  const gender = (input) => {
    const genderList = ["남성", "여성", "제3의성", "비공개"];
    const isValid = genderList.includes(input);
    const message = isValid ? "" : "남성, 여성, 제3의성, 비공개 중 하나를 입력해주세요.";
    return { isValid, message };
  };
  const day = (input) => {
    const numDay = Number(input) || 0;
    const isValid = numDay <= 0 ? false : numDay >= new Date().getFullYear() ? false : true;
    const message = isValid ? "" : "올바른 일을 넣어주세요. 예) 21일의 경우 21을 입력해주세요.";
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
    : type === "year"
    ? year
    : type === "month"
    ? month
    : type === "day"
    ? day
    : type === "gender"
    ? gender
    : null;
  //   return { password, id, email, name, phone };
};
