import React, { useState } from "react";



export const AuthContext = React.createContext({});



export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [progressB, setProgressB] = useState()
  let [result, setResult] = useState(0);

  return (
    <AuthContext.Provider value={{ user, setUser, progressB, setProgressB, result, setResult}}>
      {props.children}
    </AuthContext.Provider>
  );
};
