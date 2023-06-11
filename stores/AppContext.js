import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <AppContext.Provider
      value={{ userInfo, setUserInfo }}
    ></AppContext.Provider>
  );
};
