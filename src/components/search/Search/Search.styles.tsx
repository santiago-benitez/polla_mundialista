import styled from "styled-components";

import { SearchStyledProps as Props } from "./Search.types";

const SearchStyled = styled.div<Props>`
  .Search {
    &__header {
      display: flex;
      padding-left: 0.5rem;
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
      &__table {
        &__link {
          color: #1890ff;
          cursor: pointer;
        }
      }
      &__header {
        display: flex;
        min-width: 50vw;
        justify-content: space-around;
        &__search {
          width: 12rem;
        }
      }
    }

    &__footer {
    }
  }
`;

export default SearchStyled;
