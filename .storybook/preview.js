import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { store } from "../src/common/store/store";
import { Provider } from "react-redux";

addDecorator((story) => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>);

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
