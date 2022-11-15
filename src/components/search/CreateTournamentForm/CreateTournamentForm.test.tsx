import React from "react";

import { render } from "setupTests";
import CreateTournamentForm from "./CreateTournamentForm";

describe("CreateTournamentForm", () => {
  it("renders with default props", () => {
    render(
      <CreateTournamentForm
        open={true}
        onCreate={() => {}}
        onCancel={() => {}}
      />
    );
  });
});
