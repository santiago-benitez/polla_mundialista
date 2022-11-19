import React from "react";

import { render } from "setupTests";
import Admin from "./Admin";

describe("Admin", () => {
  it("renders with default props", () => {
    render(<Admin />);
  });
});
