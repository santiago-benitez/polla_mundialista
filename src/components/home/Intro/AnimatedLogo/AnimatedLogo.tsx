import React from "react";

import Styles from "./AnimatedLogo.styles";
import { AnimatedLogoProps as Props } from "./AnimatedLogo.types";
import Logo from "components/global/Logo/Logo";

const AnimatedLogo: React.FC<Props> = props => {
  return (
    <Styles className="AnimatedLogo">
      <Logo />
    </Styles>
  );
};

export default AnimatedLogo;
