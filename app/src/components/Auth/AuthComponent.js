import React, { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default function AuthComponent(props) {
  const { jwt } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (jwt === "" || !jwt) {
      history.push("/");
    }
  }, []);

  return <div>{props.children}</div>;
}
