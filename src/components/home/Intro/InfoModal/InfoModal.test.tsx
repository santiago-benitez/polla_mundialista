import React from "react";

import InfoModal from "./InfoModal";
import { render } from "setupTests";

describe("InfoModal", () => {
  it("renders without crashing", () => {
    render(<InfoModal />);
  });
});
