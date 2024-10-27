import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    user: null,
    token: null,
  });

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};
