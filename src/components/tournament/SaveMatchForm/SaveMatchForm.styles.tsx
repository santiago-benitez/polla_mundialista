import styled from "styled-components";

import { SaveMatchFormStyledProps as Props } from "./SaveMatchForm.types";

const SaveMatchFormStyled = styled.div<Props>`
  .SaveMatchForm {
    background-color: red;
    &__test {
      background-color: green;
    }
  }
`;

export default SaveMatchFormStyled;
