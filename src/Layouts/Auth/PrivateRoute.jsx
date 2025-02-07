import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(parseInt(role))) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
