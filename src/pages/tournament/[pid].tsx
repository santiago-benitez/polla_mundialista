import Head from "next/head";
import React from "react";

import Tournament from "components/tournament/Tournament/Tournament";
import CONSTANTS from "../../config/constants";

const { TITLE } = CONSTANTS;

interface Props {}

const TournamentPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Tournament />
    </>
  );
};

export default TournamentPage;
