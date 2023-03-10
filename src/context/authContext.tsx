import React from 'react';

import { createContext, useContext, useState } from "react";

type AuthContextType = {
    registerUser:object[],
    setregisterUser:React.Dispatch<React.SetStateAction<object[]>>
}

const authContext = createContext({} as AuthContextType);
const useAuth = () => useContext(authContext);

type registerUserType = object; 

const AuthProvider = ({children} : any) => {
  const [registerUser, setregisterUser] = useState<registerUserType[]>([])

    return(
        <authContext.Provider value={{registerUser, setregisterUser}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider, useAuth, authContext};