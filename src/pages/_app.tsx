import { AppProps as Props } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import "antd/dist/antd.css";

import Error from "components/error/Error/Error";
import Layout from "components/global/Layout/Layout";
import Providers from "containers/Providers/Providers";
import { translations } from "@aws-amplify/ui-react";
import {
  AmplifyProvider,
  Authenticator,
  Theme,
  ThemeProvider
} from "@aws-amplify/ui-react";
import { Auth, I18n, Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "aws-exports";

declare global {
  interface Window {
    Cypress: boolean;
  }
}

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

I18n.putVocabularies(translations);
I18n.setLanguage("es");

const App: React.FC<Props> = props => {
  const { Component, pageProps } = props;
  const { dehydratedState } = pageProps as any;

  const theme: Theme = {
    name: "my-theme",
    tokens: {
      colors: {
        brand: {
          primary: {
            10: { value: "#e5ced5" },
            20: { value: "#e5ced5" },
            40: { value: "#e5ced5" },
            60: { value: "#e5ced5" },
            80: { value: "#6C1933" },
            90: { value: "#6C1933" },
            100: { value: "#6C1933" }
          }
        }
      }
    }
  };

  const app = (
    <Providers dehydratedState={dehydratedState}>
      <Layout>
        <AmplifyProvider>
          <Authenticator.Provider>
            <Layout>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </Layout>
          </Authenticator.Provider>
        </AmplifyProvider>
      </Layout>
    </Providers>
  );

  return <ErrorBoundary FallbackComponent={Error}>{app}</ErrorBoundary>;
};

export default App;
