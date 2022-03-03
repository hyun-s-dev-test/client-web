import React from "react";

import { InputBirthComponent } from "./InputBirthComponent";
import * as UserAuth from "../state/userAuthSlice";

export default {
  title: "Input/BirthComponent",
  component: InputBirthComponent,
};

const Template = (args) => <InputBirthComponent {...args} />;

export const id = Template.bind({});
// name, type, placeholder, title, validator, action, defaultValue
id.args = {
  name: "year",
  placeholder: "1999",
  title: "생년",
  type: "text",
  defaultValue: "defaultValue?.year",
  inputValue: "birthYear",
  setInputValue: "setBirthYear",
  setWarningToggle: "setWarningToggle",
};

export const Phone = Template.bind({});
Phone.args = {
  name: "phone",
  type: "text",
  placeholder: "폰번호",
  title: "타이틀",
  validator: "phone",
  action: UserAuth.setPhone,
};
