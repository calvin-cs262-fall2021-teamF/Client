import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { LoginContext } from "./Context/loginContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ isLoggedIn, userId, setIsLoggedIn, setUserId }}>
        <Tabs />
      </LoginContext.Provider>
    </NavigationContainer>
  );
}
