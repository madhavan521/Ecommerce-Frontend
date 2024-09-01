import React, { createContext, useState } from 'react';
 const LoginContext=createContext()
const LoginContextProvider = ({children}) => {
      const[auth,setAuth]=useState('Login')

  return (
    <div>
    <LoginContext.Provider value={{auth,setAuth}}>
        {children}
    </LoginContext.Provider>
      
    </div>
  );
}

export{  LoginContextProvider , LoginContext};
