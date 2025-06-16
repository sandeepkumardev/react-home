import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return <authContext.Provider value={{ currentUser, setCurrentUser }}>{children}</authContext.Provider>;
};

export default AuthProvider;
