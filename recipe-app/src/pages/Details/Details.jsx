import { useLocation } from "react-router-dom";

function Details() {
    const {state} =useLocation()
    console.log(state);
  return (
    <div>Details</div>
  )
}

export default Details