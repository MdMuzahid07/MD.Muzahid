/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
