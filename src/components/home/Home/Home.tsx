import React from "react";

import Intro from "../Intro/Intro";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = props => {
  return (
    <Styles className="Home">
      <header className="Home__header" />
      <main className="Home__main">
        <Intro />
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
