function Perfect(a, b) {
  const ilksayi = a;
  const ikincisayi = b;
  let asal = [];
  let liste = [];
  let arasinda = [];
  for (let i = 2; i < ikincisayi + 1; i++) {
    let sayac = 0;
    for (let a = 2; a <= i; a++) {
      if (i % a === 0) {
        sayac += 1;
      }
    }
    if (sayac < 2) {
      asal.push(i);
    }
    if (asal.length === ikincisayi.toString().length) {
      break;
    }
  }
  for (let i = 0; i < asal.length; i++) {
    const formul = 2 ** (asal[i] - 1) * (2 ** asal[i] - 1);
    liste.push(formul);
  }
  for (let i of liste) {
    if (i >= ilksayi && i <= ikincisayi) {
      arasinda.push(i);
      arasinda.push("\n");
    }
  }
  arasinda.pop();
  return arasinda;
}
export default Perfect;
