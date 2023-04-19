import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [post, SetPost] = useState([]);
  return (
    <UserContext.Provider value={{ post, SetPost }}>
      {children}
    </UserContext.Provider>
  );
};
