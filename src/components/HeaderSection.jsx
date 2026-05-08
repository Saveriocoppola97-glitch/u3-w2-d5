import { Button, Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaaderSection = function () {
  const [weather, setWeather] = useState([]);

  const allCity = ["Roma", "Milano", "Halli"];

  useEffect(function () {
    allCity.map(function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=ce6e3dffb4ae5a9923595e129ec923be&units=metric",
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setWeather(function (prec) {
            return [...prec, data];
          });
        })
        .catch(function (error) {
          console.error("Errore fetch:", error);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="rounded-bottom"
      style={{
        backgroundImage: "url('/Nuvole.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container fluid className="p-5 mb-3">
        <Row className="justify-content-center py-3">
          <Col xs={12} md={8} lg={6}>
            <InputGroup className="shadow-sm p-2 bg-white rounded-1">
              <InputGroup.Text className="bg-white border-0">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Cerca località"
                className="border-0"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          {weather.map(function (city, index) {
            return (
              <Col className="px-5 px-sm-3" xs={12} sm={4} key={index}>
                <Link
                  to={"/city/" + city.name}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    className="w-100 d-flex justify-content-between align-items-center small"
                    style={{ backgroundColor: "#233a8e" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i
                        className={
                          city.weather[0].main === "Clear"
                            ? "bi bi-sun"
                            : city.weather[0].main === "Rain"
                              ? "bi bi-cloud-rain"
                              : city.weather[0].main === "Snow"
                                ? "bi bi-snow"
                                : "bi bi-cloud"
                        }
                      />
                      <span>{city.name}</span>
                    </div>
                    <span className="text-nowrap">{city.main.temp}°C</span>
                  </Button>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HeaaderSection;
