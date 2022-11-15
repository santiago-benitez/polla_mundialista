import { useContext } from "react";

import { AuthContext } from "contexts/auth/auth.context";
import { AuthProviderValue } from "contexts/auth/auth.context.types";

const useAuth = () => {
  const context = useContext<AuthProviderValue>(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default useAuth;
