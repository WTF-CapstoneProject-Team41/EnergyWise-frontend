import { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext(null);

// Keys for localStorage
const TOKEN_KEY = "ew_token";
const USER_KEY = "ew_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem(TOKEN_KEY) || null;
  });

  const login = (userData, authToken) => {
    // Save to state
    setUser(userData);
    setToken(authToken);
    // Persist to localStorage
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    localStorage.setItem(TOKEN_KEY, authToken);
  };

  const logout = () => {
    // Clear state
    setUser(null);
    setToken(null);
    // Clear localStorage
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
