import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const MainSection = function () {
  const params = useParams();

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
        </div>
      </Col>
    </Row>
  );
};

export default MainSection;
