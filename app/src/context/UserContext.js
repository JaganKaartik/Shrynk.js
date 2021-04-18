import React, { createContext, useState } from 'react';

const UserContext = createContext([[], () => {}]);

const UserProvider = (props) => {
  const [jwt, setJwt] = useState('');
  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
