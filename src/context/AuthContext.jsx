import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  const [Auth, setAuth] = useState(localStorage.getItem("Auth_token"));
  const [Role, setRole] = useState(localStorage.getItem("role"));
  

  useEffect(() => {
    const token = localStorage.getItem('Auth_token');
    const role = localStorage.getItem('role');
    if (token) {
      setAuth(token); 
    }
    if(role){
      setRole(role);
    }
  }, []); 

  const login = (token,role) => {
    setAuth(token);
    setRole(role)
    localStorage.setItem('Auth_token', token);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setAuth(null);
    setRole(null);
    localStorage.removeItem('Auth_token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ Auth, login, logout,Role }}>
      {children}
    </AuthContext.Provider>
  );


};  

export const useAuthContext = () => useContext(AuthContext);
