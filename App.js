/**
 * App container, starting file of the app
 * This includes the app context.
 * 
 * @author: Peter Peng, Fall 2021
 */
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { LoginContext } from "./context/loginContext";

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
