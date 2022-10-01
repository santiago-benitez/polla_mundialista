import React from "react";

import AnimatedLogoStyled from "./AnimatedLogo";
import { render } from "setupTests";

describe("AnimatedLogo", () => {
  it("renders without crashing", () => {
    render(<AnimatedLogoStyled className="AnimatedLogo" />);
  });
});
