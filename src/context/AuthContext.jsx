import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    username: null,
    id: null,
    token: null,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const savedAuthState = JSON.parse(localStorage.getItem("authState"));
    if (savedAuthState) {
      setAuthState(savedAuthState);
    }
  }, []);

   const login = (username, id, token) => {
    const newAuthState = { username, id, token };
    setAuthState(newAuthState);
    localStorage.setItem("authState", JSON.stringify(newAuthState));
  };

   const logout = () => {
    setAuthState({ username: null, id: null, token: null });
    localStorage.removeItem("authState");

  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

 export const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthContext }; 
