function Palind(a, b) {
  const ilksayi = a;
  const ikincisayi = b;
  let liste = [];

  for (let i = ilksayi; i < ikincisayi + 1; i++) {
    liste.push(i);
  }
  for (let i of liste) {
    if (i == i.toString().split("").reverse().join("")) {
      console.log(i);
    }
  }
}
