import styled from "styled-components";

import { CreateTournamentFormStyledProps as Props } from "./CreateTournamentForm.types";

const CreateTournamentFormStyled = styled.div<Props>`
  .CreateTournamentForm {
    &__loading {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default CreateTournamentFormStyled;
