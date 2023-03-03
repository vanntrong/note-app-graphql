import { useAuthContext } from "../contexts/auth.context";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
