/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = true;
  return user ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
