import "./home.scss";
import { carddata } from "../../helper/carddata";
import Card from "../../components/Card/Card";
function Home() {
  return (
    <main>
      <div className="design">
        <h2>Professional Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          id, optio esse incidunt dolore ipsa atque exercitationem illum totam
          doloribus. Unde laborum sapiente recusandae consectetur ratione sunt
          quibusdam facilis fugit!
        </p>
      </div>
      <div className="subscribe">
        <h3>Subscribe To Our Newsletter</h3>
        <div>
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="csslogohtml">
        {carddata.map((e) => (
          <Card key={e.id} e={e} />
        ))}
      </div>
    </main>
  );
}

export default Home;
