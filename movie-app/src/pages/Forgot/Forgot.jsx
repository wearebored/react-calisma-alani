import { ImgDiv, LeftRight, LoginPage, LoginRight } from "../Login/login-styled";

function Forgot() {
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
              type="email"
              id="email"
              placeholder="Enter your email address..."
            />

            {/* <NavLink to="/forgot">Forgot password?</NavLink> */}
            <button>Continue</button>
          </LoginRight>
        </LeftRight>
      </LoginPage>
    </div>
  );
}

export default Forgot;
