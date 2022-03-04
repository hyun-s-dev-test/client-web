import React from "react";

import { BirthInput } from "./BirthInputComponent";
import * as UserAuth from "../state/userAuthSlice";

export default {
  title: "Input/Birth",
  component: BirthInput,
};

const Template = (args) => <BirthInput {...args} />;

export const Default = Template.bind({});
// name, type, placeholder, title, validator, action, defaultValue
Default.args = {
  year: "2000",
  month: "02",
  day: "16",
};
