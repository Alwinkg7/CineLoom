import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, condition, redirectTo = "/login" }) => {
  return condition ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
