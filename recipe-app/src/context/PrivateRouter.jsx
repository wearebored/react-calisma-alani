import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "./LoginContext";


function PrivateRouter() {
  const { user} = useContext(LoginContext);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default PrivateRouter;
