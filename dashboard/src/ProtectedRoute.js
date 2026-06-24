import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import Home from "./components/Home";
 



const ProtectedRoute = ( ) => {
  
  const [username, setUsername] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3004/",
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