import styled from "styled-components";

import { TournamentStyledProps as Props } from "./Tournament.types";

const TournamentStyled = styled.div<Props>`
  .Tournament {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      border-bottom: 1px solid #f0f0f0;
      &__menu {
        flex: 1;
        display: flex;
        justify-content: end;
      }
      &__submenu {
        &__logo {
          padding-left: 0.6rem;
        }
      }
    }

    &__body {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      min-height: calc(98vh - 3.4rem);
      &__card {
        min-width: 75vw;
      }
      &__table {
        &__link {
          color: #1890ff;
          cursor: pointer;
        }
      }
      &__header {
      }
    }
    &__footer {
    }
  }
`;

export default TournamentStyled;
