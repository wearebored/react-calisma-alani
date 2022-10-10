import Veri from "../components/Picture";
import data from "../helper/data";
function Header() {
  return (
    <header>
      <h1>Albums</h1>
    </header>
  );
}
function Main() {
  return (
    <main>
      {data.map((a, i) => (
        <Veri key={i} resim={a.src.large} yazi={a.photographer} />
      ))}
    </main>
  );
}

export { Header, Main };
