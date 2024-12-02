import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize auth state from localStorage
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : { isAuthenticated: false, username: null, userType: null };
  });

  // Sync auth state with localStorage
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  // Login function
  const login = (username, userType) => {
    const newAuth = { isAuthenticated: true, username, userType };
    setAuth(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  // Logout function
  const logout = () => {
    setAuth({ isAuthenticated: false, username: null, userType: null });
    localStorage.removeItem('auth');
  };

  // Optional helpers
  const isAdmin = auth.isAuthenticated && auth.userType === 'admin';
  const isUser = auth.isAuthenticated && auth.userType === 'user';

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAdmin, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};
