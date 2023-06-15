import { Link } from "react-router-dom";

const HomePage = () => {
  const day = new Date().getDay();
  const weekDays = [
    "söndag",
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
  ];
  const today = weekDays[day];

  return (
    <div className="homepage">
      <h1 className="homepage-title">Matproblem?</h1>
      <p>
        Därför har jag lagat den här sidan – som hjälp då man inte har någon
        fantasi alls med vad man ska äta.
        <br />
        <br />
        Testa randomisera en maträtt för att underlätta din {today}:
      </p>
      <Link to="/random-food" className="btn btn-primary">
        Jag vill testa
        <ion-icon name="sparkles-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default HomePage;
