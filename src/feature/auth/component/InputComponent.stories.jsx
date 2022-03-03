import React from "react";

import { InputComponent } from "./InputComponent";
import * as UserAuth from "../state/userAuthSlice";

export default {
  title: "Input/Component",
  component: InputComponent,
};

const Template = (args) => <InputComponent {...args} />;

export const id = Template.bind({});
// name, type, placeholder, title, validator, action, defaultValue
id.args = {
  name: "id",
  type: "text",
  placeholder: "기본값입니당",
  title: "타이틀",
  validator: "id",
  action: UserAuth.setId,
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
