import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
function Github() {
  const { maxwidth, setMaxwidth } = useContext(LoginContext);

  return <div>Github</div>;
}

export default Github;
