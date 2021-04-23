import React, { useEffect } from 'react';
// import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { getAuthToken } from '../../helpers/token.helper';

export default function AuthComponent(props) {
  // const { auth } = useContext(UserContext);
  // const { jwt } = auth;
  const history = useHistory();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      history.push('/');
    }
  }, []);

  return <div>{props.children}</div>;
}
