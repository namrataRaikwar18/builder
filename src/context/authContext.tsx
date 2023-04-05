import React from "react";

import { createContext, useContext, useState } from "react";

type AuthContextType = {
  userData: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>;
};

type UserDataType = {
  email: string;
  password: string;
};

const authContext = createContext({} as AuthContextType);
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<UserDataType>(
    JSON.parse(localStorage.getItem("userDetail") || "{}") || {
      email: "",
      password: "",
    }
  );
  return (
    <authContext.Provider value={{ userData, setUserData }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth, authContext };
