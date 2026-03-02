import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("ew_user");

    if (stored) {
      const parsed = JSON.parse(stored);
      const firstName = parsed.firstName || parsed.identifier || "User";
      const lastName = parsed.lastName || "";
      const initials =
        `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

      return { name: firstName, initials };
    }

    return { name: "User", initials: "U" };
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
