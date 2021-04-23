import React, { createContext, useState } from 'react';

const UserContext = createContext([[], () => {}]);

const UserProvider = (props) => {
  const [authState, setAuthState] = useState(false);
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider
      value={{ auth: { authState, setAuthState }, profile: { user, setUser } }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
