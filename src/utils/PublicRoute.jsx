import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return !isAuthenticated ? element : <Navigate to="/" />;
};

export default PublicRoute;
