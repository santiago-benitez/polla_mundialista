import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";

const HomeStyled = styled.div<Props>`
  .Home {
    &__header {
      padding-left: 0.5rem;
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
      &__table {
        min-width: 50vw;
        &__link {
          color: #1890ff;
          cursor: pointer;
        }
      }
    }
    &__footer {
    }
  }
  .ant-menu-item-selected {
    color: red;
  }
`;

export default HomeStyled;
