import React, { useState } from "react";



export const AuthContext = React.createContext({});



export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [progressB, setProgressB] = useState()
  return (
    <AuthContext.Provider value={{ user, setUser, progressB, setProgressB}}>
      {props.children}
    </AuthContext.Provider>
  );
};
