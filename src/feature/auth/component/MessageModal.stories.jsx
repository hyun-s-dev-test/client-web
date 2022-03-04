import React from "react";

import MessageComponent from "./MessageModal";

export default {
  title: "Message/Modal",
  component: MessageComponent,
};

const Template = (args) => <MessageComponent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isMessageOn: true,
  title: "default",
  isOk: true,
  content: "default",
  isPw: true,
};

export const FindId = Template.bind({});
FindId.args = {
  isMessageOn: true,
  title: "아이디 찾아라",
  content: "아이디 여기에 뜬다",
  isOk: false,
  isPw: true,
};

export const FindPassword = Template.bind({});
FindPassword.args = {
  isMessageOn: true,
  title: "비밀번호를 찾아라",
  content: "비밀번호 여기에 뜬다",
  isOk: false,
  isPw: false,
};
