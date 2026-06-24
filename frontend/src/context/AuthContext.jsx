 

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

    useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://tradingplatform-nulv.onrender.com",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setIsLoggedIn(true);
          setUsername(data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    verifyUser();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};