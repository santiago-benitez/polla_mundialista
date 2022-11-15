import styled from "styled-components";

import { LoginStyledProps as Props } from "./Login.types";

const LoginStyled = styled.div<Props>`
  &.Login {
    min-width: var(--sizes-page-minWidth);
    max-width: var(--sizes-page-maxWidth);
    min-height: var(--sizes-page-minHeight);
    display: flex;
    flex-direction: column;
  }

  .Login {
    &__header {
    }

    &__main {
      flex: 1;
    }

    &__footer {
    }
  }
`;

export default LoginStyled;