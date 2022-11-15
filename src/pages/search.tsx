import Head from "next/head";
import React from "react";

import Search from "components/search/Search/Search";
import CONSTANTS from "../config/constants";

const { TITLE } = CONSTANTS;

interface Props {}

const SearchPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Search />
    </>
  );
};

export default SearchPage;
