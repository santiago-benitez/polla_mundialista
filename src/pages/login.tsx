import Head from "next/head";
import React from "react";

import Login from "components/login/Login/Login";
import CONSTANTS from "config/constants";

const { TITLE } = CONSTANTS;

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
