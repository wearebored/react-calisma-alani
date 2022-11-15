import { Outlet } from "react-router-dom"


function PrivateRouter() {
const user = true
  return (
    user?<Outlet/>:<div>private</div>
  )
}

export default PrivateRouter