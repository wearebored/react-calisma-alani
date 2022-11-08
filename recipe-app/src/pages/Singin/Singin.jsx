import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { register } from "../../firebase";

function Singin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const singinClick = async () => {
    console.log(email);
    console.log(password);
    const regist = await register(email, password);
    if (regist.operationType === "signIn") {
      setUser(regist);
      navigate("/");
    } else {
      setErrors(regist);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors("");
            }}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors("");
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div style={{ height: "20px" }}>{errors ? errors : ""}</div>
          <button onClick={singinClick}>Sing in</button>
        </div>
      </div>
    );
  }
}
//   return (
//     <div>
//       <div>
//         <input
//           onChange={(e) => {
//             setEmail(e.target.value);
//             setErrors("");
//           }}
//           type="text"
//           name="email"
//           id="email"
//           placeholder="Email"
//           value={email}
//         />
//         <input
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setErrors("");
//           }}
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Password"
//         />
//         <div style={{ height: "20px" }}>{errors ? errors : ""}</div>
//         <button onClick={singinClick}>Sing in</button>
//       </div>
//     </div>
//   );
// }

export default Singin;
