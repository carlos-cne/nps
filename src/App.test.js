import React from "react";
import { mount } from "enzyme";

import App from "./App";

it("should render something", () => {
  const wrapper = mount(<App />);

  expect(wrapper.find("h1").exists()).toBe(true);
});
