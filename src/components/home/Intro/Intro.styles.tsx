import styled from "styled-components";

import { IntroStyledProps as Props } from "./Intro.types";
import CONSTANTS from "config/constants";

const { tablet } = CONSTANTS.BREAKPOINTS;

const IntroStyled = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--palette-h0s0l98);

  @media (prefers-color-scheme: dark) {
    background-color: var(--palette-h0s0l15);
  }

  .Intro {
    &__header {
    }

    &__main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(12px + 2vmin);
      color: var(--palette-h0s0l100);
      position: relative;
    }

    &__info-button-wrapper {
      position: absolute;
      right: 3.2rem;
      top: 3.2rem;

      @media (max-width: ${tablet}px) {
        right: 0;
        padding-right: 3.2rem;
      }
    }

    &__info-button {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: transparent;
      border: 1px solid var(--palette-primary);
      color: var(--palette-primary);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 100%;
      font-weight: 500;
      padding: 1rem;
      line-height: 0;
      cursor: pointer;
      z-index: 2;
      transition: all 0.2s;
      font-size: 1.4rem;

      &:hover,
      &:active,
      &:focus {
        outline: none;
        background-color: var(--palette-primary);
        color: var(--palette-h0s0l98);
        border-color: var(--palette-h0s0l98);
      }

      &:hover + div {
        opacity: 1;
      }
    }

    &__title {
      display: flex;
      align-items: baseline;

      &__text {
        color: var(--palette-h0s0l45);
        margin-bottom: 2rem;
      }

      &__version {
        color: var(--palette-h0s0l45);
        font-weight: 300;
        font-size: 1.3rem;
        padding-left: 1rem;
      }
    }

    &__link {
      text-decoration: none;
      color: var(--palette-primary);
      border: 1px solid var(--palette-primary);
      border-radius: 2rem;
      font-size: 1.6rem;
      padding: 0.5rem 1.5em;
      transition: all 0.2s;

      @media not all and (hover: none) {
        &:hover,
        &:active {
          background-color: var(--palette-primary);
          color: var(--palette-h0s0l100);
        }
      }
    }

    &__footer {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 3rem;

      &__author {
        color: var(--palette-h0s0l45);
        font-size: 1.4rem;
      }
    }
  }
`;

export default IntroStyled;
