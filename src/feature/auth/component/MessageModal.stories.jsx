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
};

export const Secondary = Template.bind({});
Secondary.args = {
  isMessageOn: true,
  title: "secondary",
  isOk: false,
};
