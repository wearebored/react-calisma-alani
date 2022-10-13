import Palind from "../palindromik/palind";
import Perfect from "../perfect/perfect";
function Button() {
  function button1() {
    const ilk = document.querySelector("#girdi1").value;
    const ikin = document.querySelector("#girdi2").value;
    document.querySelector("#cikti1").value = "";
    for (let i of Palind(ilk, ikin).reverse()) {
      document.querySelector("#cikti1").value += i;
    }
  }
  function button2() {
    const ilk = document.querySelector("#girdi1").value;
    const ikin = document.querySelector("#girdi2").value;
    document.querySelector("#cikti2").value = "";
    for (let i of Perfect(ilk, ikin).reverse()) {
      document.querySelector("#cikti2").value += i;
    }
  }


  return (
    <div>
      <button onClick={button1} id="buton1">
        List Palindrome
      </button>
      <button onClick={button2} id="buton2">
        List Perfect Number
      </button>
    </div>
  );
}
export default Button;
