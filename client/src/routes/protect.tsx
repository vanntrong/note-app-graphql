import { useAuthContext } from "../contexts/auth.context";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectRoutes;
