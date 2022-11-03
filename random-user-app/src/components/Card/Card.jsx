import "./card.scss";
function Card({ userdata }) {
  return (
    <div className="card">
      <div className="picturename">
        <img src={userdata.picture?.large} alt={userdata.name?.last} />
        <p>
          {userdata.name?.title +
            " " +
            userdata.name?.first +
            " " +
            userdata.name?.last}
        </p>
      </div>
      <div className="mail">
        <i className="fa-solid fa-envelopes-bulk"></i>
        <p>{userdata.email}</p>
      </div>
      <div className="phone">
        <i className="fa-solid fa-phone"></i>
        <p>{userdata.phone}</p>
      </div>
      <div className="location">
        <i className="fa-solid fa-map-location-dot"></i>
        <p>{userdata.location?.city + " - " + userdata.location?.country}</p>
      </div>
      <div className="age">
        <p>Age:{userdata.dob?.age}</p>
      </div>
      <div className="date">
        <p>Register Date:{userdata.registered?.date.slice(0, 10)}</p>
      </div>
    </div>
  );
}

export default Card;
