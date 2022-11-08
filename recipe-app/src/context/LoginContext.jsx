import { createContext, useState } from "react";

export const LoginContext = createContext();
function LoginProvider({ children }) {
  const [user, setUser] = useState("");
  const values = { user, setUser };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}

export default LoginProvider;
