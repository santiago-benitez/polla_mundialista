import { AppProps as Props } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import Error from "components/error/Error/Error";
import Layout from "components/global/Layout/Layout";
import Providers from "containers/Providers/Providers";

declare global {
  interface Window {
    Cypress: boolean;
  }
}
console.log("");

const App: React.FC<Props> = props => {
  const { Component, pageProps } = props;

  const app = (
    <Providers dehydratedState={pageProps.dehydratedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );

  return <ErrorBoundary FallbackComponent={Error}>{app}</ErrorBoundary>;
};

export default App;
