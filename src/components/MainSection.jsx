import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const MainSection = function () {
  const params = useParams();

  const [prediction, setPrediction] = useState([]);

  useEffect(
    function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          params.name +
          "&appid=ce6e3dffb4ae5a9923595e129ec923be&units=metric",
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          setPrediction(data.list);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [params.name],
  );

  return (
    <Row>
      <Col xs={12} md={12} lg={8}>
        <div
          style={{
            boxShadow: "0 0 18px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)",
          }}
          className="border rounded-2 bg-white text-secondary overflow-hidden"
        >
          <div className="p-5">
            <Row>
              <Col>
                <h3>
                  Meteo {params.name} e previsioni del tempo per oggi, domani e
                  i prossimi 5 giorni
                </h3>
              </Col>
            </Row>
          </div>
          <img src="/Soleggiato.jpg" alt="" className="w-100" />
          <div className="p-3">
            {prediction.map(function (item, index) {
              return (
                <Row
                  key={index}
                  className="py-3 align-items-center justify-content-between"
                >
                  <Col className="d-flex align-items-center gap-2">
                    <i
                      className={
                        item.weather[0].main === "Clear"
                          ? "bi bi-sun"
                          : item.weather[0].main === "Rain"
                            ? "bi bi-cloud-rain"
                            : item.weather[0].main === "Snow"
                              ? "bi bi-snow"
                              : "bi bi-cloud"
                      }
                    />
                    <span>
                      {new Date(item.dt_txt).toLocaleDateString("it-IT", {
                        weekday: "long",
                        day: "numeric",
                      })}{" "}
                      {item.dt_txt.split(" ")[1]}
                    </span>
                  </Col>
                  <Col xs="auto">{item.main.temp}°C</Col>
                </Row>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainSection;
