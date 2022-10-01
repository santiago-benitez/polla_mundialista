import styled from "styled-components";

import { InfoModalStyledProps as Props } from "./InfoModal.types";

const InfoModalStyled = styled.div<Props>`
  min-width: 32rem;
  max-width: var(--sizes-page-maxWidth);
  height: auto;
  min-height: 40rem;
  padding: 3rem 3rem;
  background-color: var(--palette-primary);
  position: absolute;
  right: 0;
  top: 0;
  text-align: left;
  max-height: calc(100vh - 3rem);
  opacity: 0;
  transition: all 0.4s;
  isolation: isolate;
  z-index: 1;

  .InfoModal {
    &__heading {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.8rem;
      color: var(--palette-h0s0l100);
    }

    &__ul {
      list-style: none;
    }

    &__li {
      font-size: 1.6rem;
      padding-bottom: 1.8rem;
      font-weight: 300;
      line-height: 1.2;
    }
  }
`;

export default InfoModalStyled;
