import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [jwt, setJwt] = useState("");
  return (
    <UserContext.Provider value={[jwt, setJwt]}>
      {props.children}
    </UserContext.Provider>
  );
};
