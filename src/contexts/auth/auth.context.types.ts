// Auth Provide type
import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthProviderValue {
  // When is authenticated anonymously
  // signInWithEmailAndPassword: (
  //   email: string,
  //   password: string
  // ) => Promise<undefined>;
  uid: string | undefined;
  // email: string | null | undefined;
  isSignedIn: boolean;
}
