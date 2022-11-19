import Head from "next/head";
import React from "react";

import Admin from "components/admin/Admin/Admin";
import CONSTANTS from "../config/constants";

const { TITLE } = CONSTANTS;

interface Props {}

const AdminPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Admin />
    </>
  );
};

export default AdminPage;
