import React from "react";

import { render } from "setupTests";
import Tournament from "./Tournament";

describe("Tournament", () => {
  it("renders with default props", () => {
    render(<Tournament />);
  });
});
