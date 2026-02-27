import { createContext } from "react";

export const UserContext = createContext(null);
// const UserContext = createContext(null);

// export function UserProvider({ children }) {
//   // TODO: swap this out for your real auth/profile fetch
//   const [user, setUser] = useState({
//     name: "Sarah", // first name shown in greeting
//     initials: "SA", // shown in avatar
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const ctx = useContext(UserContext);
//   if (!ctx) return { user: { name: "User", initials: "U" } };
//   return ctx;
// }
