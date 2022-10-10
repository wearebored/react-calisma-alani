
function Veri(a) {
  
    return (
      <>
        <div className="picture">
          <div className="container">
            <img src={a.resim} alt="" />
          </div>
          <div className="yazı">
            <p>{a.yazi}</p>
          </div>
        </div>
      </>
    );
  
}
export default Veri;
