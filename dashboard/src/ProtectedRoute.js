import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import Home from "./components/Home";
 

const API_URL = "https://your-backend-name.onrender.com";

const ProtectedRoute = ( ) => {
  
  const [username, setUsername] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${API_URL}`,
          {},
          { withCredentials: true }
        );
        console.log("VERIFY RESPONSE:", data);
        if (data.status) {
          setIsLoggedIn(true);
          setUsername(data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return isLoggedIn ?<Home username = {username}/> : <Popup />;
};

export default ProtectedRoute;