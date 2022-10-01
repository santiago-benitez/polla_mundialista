import React from "react";

import Styles from "./Intro.styles";
import { IntroProps as Props } from "./Intro.types";
import AnimatedLogoStyled from "components/home/Intro/AnimatedLogo/AnimatedLogo";
import InfoModal from "components/home/Intro/InfoModal/InfoModal";
import useI18n from "hooks/useI18n";

import packageJSON from "../../../../package.json";

const Intro: React.FC<Props> = props => {
  const t = useI18n().home.Intro;

  return (
    <Styles className="Intro">
      <header className="Intro__header" />
      <main className="Intro__main">
        <AnimatedLogoStyled className="AnimatedLogo" />
        <div className="Intro__info-button-wrapper">
          <button className="Intro__info-button">i</button>
          <InfoModal />
        </div>
        <div className="Intro__title">
          <p className="Intro__title__text">{t.title}</p>
          <span className="Intro__title__version">
            {t.version}: {packageJSON.version}
          </span>
        </div>
        <a
          className="Intro__link"
          href="https://docs.google.com/document/d/1tlO1T27itaSTVJuFCod2cQ1Wkxz3FRsW33ekq5U8dgY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.guidelines}
        </a>
      </main>
      <footer className="Intro__footer">
        <span className="Intro__footer__author">
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Developed by: TRD
        </span>
      </footer>
    </Styles>
  );
};

Intro.defaultProps = {};

export default Intro;
