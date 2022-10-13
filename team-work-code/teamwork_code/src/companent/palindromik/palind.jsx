function Palind(a, b) {
  const ilksayi = Number(a);
  const ikincisayi = Number(b);
  let liste = [];
  let cikti = [];
  for (let i = ilksayi; i < ikincisayi + 1; i++) {
    liste.push(i);
  }
  for (let i of liste) {
    if (i == i.toString().split("").reverse().join("")) {
      cikti.push(i);
    }
  }
  console.log(cikti);
  return cikti;
}
export default Palind;
