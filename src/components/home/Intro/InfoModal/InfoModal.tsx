import React from "react";

import Styles from "./InfoModal.styles";
import { InfoModalProps as Props } from "./InfoModal.types";
import useI18n from "hooks/useI18n";

const InfoModal: React.FC<Props> = () => {
  const t = useI18n().home.Intro;

  return (
    <Styles className="InfoModal">
      <h2 className="InfoModal__heading">{t.included}</h2>
      <ul className="InfoModal__ul">
        <li className="InfoModal__li">React 18</li>
        <li className="InfoModal__li">Next 12</li>
        <li className="InfoModal__li">Typescript 4.6</li>
        <li className="InfoModal__li">React query 3</li>
        <li className="InfoModal__li">testing-library/react 13</li>
        <li className="InfoModal__li">Jest 27</li>
        <li className="InfoModal__li">Cypress 9</li>
      </ul>
    </Styles>
  );
};

InfoModal.defaultProps = {};

export default InfoModal;
