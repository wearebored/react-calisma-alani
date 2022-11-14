import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRouter = () => {
  const { logindata } = useSelector((store) => store.loginsignin);
 
  return logindata ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
