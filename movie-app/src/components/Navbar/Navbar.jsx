import { LoginContainer, NavbarContainer } from "./navbar-styled"

function Navbar() {
  return (
    <div>
        <NavbarContainer>
            <h1>React Movie App</h1>
            <LoginContainer>
                <div>LOGİN</div>
                <div>REGİSTER</div>
            </LoginContainer>
        </NavbarContainer>
    </div>
  )
}

export default Navbar