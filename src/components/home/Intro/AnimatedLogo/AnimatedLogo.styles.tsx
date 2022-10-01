import styled from "styled-components";

import { AnimatedLogoProps as Props } from "./AnimatedLogo.types";

const AnimatedLogoStyled = styled.div<Props>`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(40%);
    }
    20% {
      transform: translateY(15%);
    }
    30% {
      transform: translateY(40%);
    }
    40% {
      transform: translateY(20%);
    }
    50% {
      transform: translateY(40%);
    }
    60% {
      transform: translateY(30%);
    }
    70% {
      transform: translateY(40%);
    }
    /* 100% {
    transform: translateY(40%);
  } */
  }

  .logo_svg__logo__circle {
    animation: bounce infinite 5s 1s ease-in-out;
    @media (prefers-color-scheme: dark) {
      fill: var(--palette-h0s0l15);
    }
  }

  .logo_svg__logo__t {
    @media (prefers-color-scheme: dark) {
      fill: var(--palette-h0s0l15);
    }
  }
`;

export default AnimatedLogoStyled;
