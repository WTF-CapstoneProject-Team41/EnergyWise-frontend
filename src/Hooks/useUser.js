import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const ctx = useContext(UserContext);

  if (!ctx) {
    return { user: { name: "User", initials: "U" } };
  }

  return ctx;
}
