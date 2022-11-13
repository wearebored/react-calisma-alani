import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRouter = () => {
  const { login } = useSelector((store) => store.loginsignin);
  console.log(login)
  return login ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
