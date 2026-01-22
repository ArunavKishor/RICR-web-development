import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("CravingUser")) || "",
  ); //checking backup data
  const [isLogin, setIsLogin] = useState(!!user);

  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin }; //chanels
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider> //provide to childeren
  );
};

export const useAuth = () => {
  return useContext(AuthContext); //sending signal to the users
};
