import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Home from "components/home/Home/Home";
import CONSTANTS from "config/constants";
import useI18n from "hooks/useI18n";

const { TITLE } = CONSTANTS;

interface Props {}

const HomePage = (props: Props) => {
  const t = useI18n().home;
  const router = useRouter();
  const auth = useAuthenticator(context => [context.user]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    const { authStatus } = auth;
    if (authStatus && authStatus !== "authenticated" && !loading) {
      router.push("/login");
    }
  }, [auth, router, loading]);

  return (
    <>
      <Head>
        <title>
          {TITLE} | {t.meta.title}
        </title>
      </Head>
      {!loading && <Home />}
    </>
  );
};

export default HomePage;
