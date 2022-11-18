import React from "react";

import { render } from "setupTests";
import SaveMatchForm from "./SaveMatchForm";

describe("SaveMatchForm", () => {
  it("renders with default props", () => {
    render(
      <SaveMatchForm
        open={true}
        onCreate={() => {}}
        onCancel={() => {}}
        loading={true}
        match={undefined}
        blocked={true}
        pollaId=""
      />
    );
  });
});
