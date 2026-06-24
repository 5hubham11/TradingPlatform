import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log("PublicRoute:", isLoggedIn);

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;