// import Palind from "../palindromik/palind";
function Button() {
  // function buttonb(){
  //   const ilk=document.querySelector("#girdi1").value
  //   const ikin=document.querySelector("#girdi2").value
  //   console.log(ilk);
  //   console.log(ikin);
  //   console.log(Palind(ilk, ikin));
  //   document.querySelector("#cikti1").value = Palind(ilk, ikin);

  // }
  function buttond(a) {
    console.log(a);
  }
  return (
    <div>
      <button onClick={buttond} id="buton1">
        List Palindrome
      </button>
      <button id="buton2">List Perfect Number</button>
    </div>
  );
}
export default Button;
