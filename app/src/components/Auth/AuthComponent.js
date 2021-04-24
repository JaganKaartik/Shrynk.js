import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuthToken } from '../../helpers/token.helper';

export default function AuthComponent(props) {
  const history = useHistory();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      history.push('/app/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{props.children}</div>;
}
