import { createContext, useState } from "react";

export const User = createContext({});

export default function UserProvider({ children }) {
  const [users, setUsers] = useState({});
  return <User.Provider value={{ users, setUsers }}>{children}</User.Provider>;
}
