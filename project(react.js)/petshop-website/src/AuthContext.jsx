import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // યુઝરનો ડેટા localStorage માં સેવ રહેશે જેથી પેજ રિફ્રેશ કરવાથી લોગઆઉટ ન થઇ જાય
    const savedUser = localStorage.getItem("petshop_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("petshop_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("petshop_user");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);