import React from "react";

import Intro from "./Intro";
import { render } from "setupTests";

describe("Intro", () => {
  it("renders with default props", () => {
    render(<Intro />);
  });
});
