import React from "react";
import Head from "next/head";
import {
  Authenticator,
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

import Styles from "./Login.styles";
import { LoginProps as Props } from "./Login.types";

const Login: React.FC<Props> = props => {
  const { tokens } = useTheme();
  const router = useRouter();

  return (
    <Styles className="Login">
      <Head>
        <title>Login</title>
      </Head>
      <header className="Login__header" />
      <main className="Login__main">
        <Grid templateColumns={{ base: "1fr 0", medium: "2fr 1fr" }}>
          <Flex
            backgroundColor={tokens.colors.background.secondary}
            justifyContent="center"
          >
            <Authenticator>
              {({ signOut, user }) => {
                router.push("/");
              }}
            </Authenticator>
          </Flex>
          <View height="100vh">
            <Image
              src="assets/images/qatar.png"
              width="100%"
              height="75vh"
              objectFit="cover"
              alt="world-cup"
            />
          </View>
        </Grid>
      </main>
      <footer className="Login__footer" />
    </Styles>
  );
};

Login.defaultProps = {};

export default Login;
