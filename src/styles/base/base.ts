import { css } from "styled-components";

const base = css`
  /* Normalization */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    min-width: 0;
    position: relative;
  }

  *:focus {
    outline-color: var(--palette-primary);
  }

  html {
    font-size: 100%; //16px default to 10px
    width: 100%;
    height: 100%;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body,
  #__next {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    background-color: var(--palette-h210-s50-l98);
    font-family: system-ui;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
  }

  #__next > .Layout > * {
    display: flex;
    min-width: var(--sizes-page-minWidth);
    max-width: var(--sizes-page-maxWidth);
    min-height: var(--sizes-page-minHeight);
  }

  a {
    text-decoration-skip-ink: auto;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font-size: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* .amplify-button--primary {
    background-color: red;
  } */
  /* Normalization END */
`;

export default base;
