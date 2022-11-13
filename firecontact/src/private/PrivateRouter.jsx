import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRouter = () => {
  const { logindata } = useSelector((store) => store.loginsignin);
  console.log(logindata)
  return logindata ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
