import React from "react";
import { render } from "setupTests";

import Login from "./Login";

describe("Login page", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });
});