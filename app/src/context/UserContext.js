import React, { createContext, useState } from 'react';

const UserContext = createContext([[], () => {}]);

const UserProvider = (props) => {
  const [jwt, setJwt] = useState('');
  const [user, setUser] = useState('');
  return (
    <UserContext.Provider
      value={{ auth: { jwt, setJwt }, profile: { user, setUser } }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
