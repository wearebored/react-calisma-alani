import Veri from "../components/Picture"
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
      {Veri()}
    </main>
  );
}

export { Header, Main };
