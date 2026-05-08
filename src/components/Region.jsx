import { Row, Col } from "react-bootstrap";

const Region = () => {
  return (
    <div className="container py-4">
      <Row className="text-center">
        <Col xs={12} md={6} className="mb-4">
          <h2>Nord</h2>
          <ul className="list-unstyled">
            <li>Valle d'Aosta</li>
            <li>Piemonte</li>
            <li>Liguria</li>
            <li>Lombardia</li>
            <li>Trentino-Alto Adige</li>
            <li>Veneto</li>
            <li>Friuli-Venezia Giulia</li>
            <li>Emilia-Romagna</li>
          </ul>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <h2>Centro</h2>
          <ul className="list-unstyled">
            <li>Toscana</li>
            <li>Umbria</li>
            <li>Marche</li>
            <li>Lazio</li>
          </ul>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <h2>Sud</h2>
          <ul className="list-unstyled">
            <li>Abruzzo</li>
            <li>Molise</li>
            <li>Campania</li>
            <li>Puglia</li>
            <li>Basilicata</li>
            <li>Calabria</li>
          </ul>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <h2>Isole</h2>
          <ul className="list-unstyled">
            <li>Sicilia</li>
            <li>Sardegna</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Region;
