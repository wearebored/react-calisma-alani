import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../app/features/pagesSlice";
import { ImgDiv, LeftRight, LoginPage, LoginRight } from "../Login/login-styled";

function Forgot() {
  const [email,setEmail]=useState("")
  const [sonuc,setSonuc]=useState("")
const dispatch = useDispatch()
useEffect(() => {
  dispatch(setPage("forgot"));

 
}, [dispatch])

  return (
    <div>
      <LoginPage>
        <LeftRight></LeftRight>
        <LeftRight>
          <LoginRight>
            <ImgDiv>
              <img src="./image/forgot.png" alt="forgot.png" />
            </ImgDiv>
            <h3>Forgot Password</h3>
            <label htmlFor="email">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
              type="email"
              id="email"
              placeholder="Enter your email address..."
            />

            {/* <NavLink to="/forgot">Forgot password?</NavLink> */}
            <button disabled={!email} onClick={{
              forgutfire
          }
            } >Continue</button>
          </LoginRight>
        </LeftRight>
      </LoginPage>
    </div>
  );
}

export default Forgot;
