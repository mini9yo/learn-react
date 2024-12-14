import pfp from "./assets/imresizer-1734065720686.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={pfp} alt="profile picture"></img>
      <h2 className="card-title">Kaylee Ryu</h2>
      <p className="card-text">boyfriend boyfriend with a Belly so round </p>
    </div>
  );
}

export default Card;
