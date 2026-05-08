import { Link } from "react-router-dom";

const Region = () => {
  const regions = {
    nord: [
      "Valle d'Aosta",
      "Piemonte",
      "Liguria",
      "Lombardia",
      "Trentino-Alto Adige",
      "Veneto",
      "Friuli-Venezia Giulia",
      "Emilia-Romagna",
    ],
    centro: ["Toscana", "Umbria", "Marche", "Lazio"],
    sud: ["Abruzzo", "Molise", "Campania", "Puglia", "Basilicata", "Calabria"],
    isole: ["Sicilia", "Sardegna"],
  };

  return (
    <div className="text-center">
      {Object.keys(regions).map(function (area, index) {
        return (
          <div key={index}>
            <h3 className="text-uppercase mt-4">{area}</h3>
            {regions[area].map(function (region, i) {
              return (
                <Link
                  key={i}
                  className="nav-link fw-bold fs-5"
                  to={"/region/" + region}
                >
                  <div>{region}</div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Region;
