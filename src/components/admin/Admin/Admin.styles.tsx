import styled from "styled-components";

import { AdminStyledProps as Props } from "./Admin.types";

const AdminStyled = styled.div<Props>`
  .Admin {
    &__Form {
      padding: 2rem;
      width: 30rem;
    }
  }
`;

export default AdminStyled;
