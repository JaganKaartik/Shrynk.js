import React, { createContext, useState } from "react";

const UserContext = createContext([[], () => {}]);

// function UserProvider({ children }) {
const UserProvider = (props) => {
  const [jwt, setJwt] = useState("");
  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

// import { createContext } from "react";

// const authContext = createContext({
//   authenticated: false,
//   setAuthenticated: (auth) => {},
// });

// export default authContext;
