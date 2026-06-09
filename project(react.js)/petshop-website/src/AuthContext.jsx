import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("petshop_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("petshop_users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("petshop_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("petshop_user");
    }
  }, [user]);


  useEffect(() => {
    localStorage.setItem("petshop_users", JSON.stringify(users));
  }, [users]);


  const register = (userData) => {
    const userExists = users.some((u) => u.email === userData.email);
    if (userExists) {
      return { success: false, message: "This email is already registered!" };
    }
    setUsers([...users, userData]);
    setUser(userData); 
    return { success: true };
  };

  const login = (credentials) => {
    const foundUser = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (foundUser) {
      setUser(foundUser);
      return { success: true };
    }
    return { success: false, message: "Invalid email or password!" };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);