// Auth context
import { Auth, Hub } from "aws-amplify";
import React, { createContext, FC, useCallback, useMemo } from "react";
import { useEffect, useState } from "react";
import { ContextDevTool } from "react-context-devtool";

import { AuthProviderProps as Props } from "./auth.context.types";
import { AuthProviderValue } from "./auth.context.types";

// import useI18n from "hooks/useI18n";

// @ts-ignore
export const AuthContext = createContext<AuthProviderValue>({});

const AuthProvider: FC<Props> = props => {
  const [uid, setUid] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // const subscriber = useCallback((user: firebase.User | null) => {
  //   const { uid: userId, isAnonymous: isUserAnonymous } = user ?? {};
  //   if (userId) {
  //     setUid(userId);
  //     return;
  //   }
  // }, []);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = async () => {
    Hub.listen("auth", (data: any) => {
      switch (data.payload.event) {
        case "signIn":
          return setIsSignedIn(true);
        case "signOut":
          return setIsSignedIn(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setIsSignedIn(true);
    } catch (error) {
      console.log();
    }
  };

  // const signInWithEmailAndPassword = async (
  //   email: string,
  //   password: string
  // ) => {
  //   return await auth().signInWithEmailAndPassword(email, password);
  // };

  // const getEmail = () => {
  //   return auth()?.currentUser?.email;
  // };

  const value: AuthProviderValue = useMemo(() => {
    return {
      // signInWithEmailAndPassword,
      uid,
      // email: getEmail(),
      isSignedIn
    };
  }, [uid, isSignedIn]);

  return (
    <AuthContext.Provider value={value}>
      <ContextDevTool context={AuthContext} id="auth" displayName="Auth" />
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
