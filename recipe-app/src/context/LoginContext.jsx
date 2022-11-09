import { createContext, useState } from "react";

export const LoginContext = createContext();
function LoginProvider({ children }) {
  const [user, setUser] = useState("");
const [maxwidth, setMaxwidth] = useState(true);
  const values = { user, setUser, maxwidth, setMaxwidth };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}

export default LoginProvider;
