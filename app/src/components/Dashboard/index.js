import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Body from "./Body";
import Header from "./Header";

export default function Dashboard() {
  const { jwt } = useContext(UserContext);

  console.log(jwt);

  return (
    <div className="home-container">
      <table class="table-fixed container">
        <Header />
        <Body />
      </table>
    </div>
  );
}
