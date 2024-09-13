import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(()=>{console.log();
  })

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
