import React from "react";

import { render } from "setupTests";
import SaveBonusForm from "./SaveBonusForm";

describe("SaveBonusForm", () => {
  it("renders with default props", () => {
    render(
      <SaveBonusForm
        open={true}
        onCreate={() => {}}
        onCancel={() => {}}
        loading={true}
        subscriptionId=""
        pollaId=""
        blocked={true}
      />
    );
  });
});
