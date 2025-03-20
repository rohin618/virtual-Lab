import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  const [Auth, setAuth] = useState(localStorage.getItem("Auth_token"));
  

  useEffect(() => {
    const token = localStorage.getItem('Auth_token');
    if (token) {
      setAuth(token);
    }
  }, []); 

  const login = (token) => {
    setAuth(token);
    localStorage.setItem('Auth_token', token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('Auth_token');
  };

  return (
    <AuthContext.Provider value={{ Auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


};  

export const useAuthContext = () => useContext(AuthContext);
