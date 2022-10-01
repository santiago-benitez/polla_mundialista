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

const App: React.FC<Props> = props => {
  const { Component, pageProps } = props;

  const app = (
    <Providers dehydratedState={pageProps.dehydratedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default App;
