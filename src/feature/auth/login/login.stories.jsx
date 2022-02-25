// src/components/Task.stories.js

import React from "react";

import Login from "./Login";

export default {
  component: Login,
  title: "Login/doosan",
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "doosan",
};

export const Pinned = Template.bind({});
Pinned.args = {
  text: "pinned doosan",
  primary: true,
};

export const notPinned = Template.bind({});
notPinned.args = {
  text: "not important pinned doosan",
  primary: false,
};
