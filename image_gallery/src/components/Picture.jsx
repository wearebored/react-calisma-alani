import data from "../helper/data";
function Veri() {
  return data.map((a) => {
    return (
      <>
        <div className="picture">
          <div className="container">
            <img src={a.src.large} alt="" />
          </div>
          <div className="yazı">
            <p>{a.photographer}</p>
          </div>
        </div>
      </>
    );
  });
}
export default Veri;
