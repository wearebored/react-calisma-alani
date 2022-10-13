function Palind(a, b) {
  const ilksayi = Number(a);
  const ikincisayi = Number(b);
  let liste = [];
  let cikti = [];
  for (let i = ilksayi; i < ikincisayi + 1; i++) {
    liste.push(i);
  }
  for (let i of liste) {
    if (i.toString() === i.toString().split("").reverse().join("")) {
      cikti.push(i);
      cikti.push("\n");
    }
  }
  cikti.pop();
  console.log(cikti);
  return cikti;
}
export default Palind;
