import Head from "next/head";
import React from "react";

import Tournament from "components/tournament/Tournament/Tournament";

const title = "Buscar";

interface Props {}

const TournamentPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Tournament />
    </>
  );
};

export default TournamentPage;
