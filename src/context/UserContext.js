import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) return { user: { name: "User", initials: "U" }, setUser: () => {} };
  return ctx;
}
