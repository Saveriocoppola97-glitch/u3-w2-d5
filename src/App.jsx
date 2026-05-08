import { BrowserRouter } from "react-router-dom";
import HeaderMto from "./components/HeaderMto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import HeaaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <header>
        <Container>
          <BrowserRouter>
            <HeaderMto />
          </BrowserRouter>
        </Container>
      </header>
      <main>
        <Container>
          <HeaaderSection />
        </Container>
      </main>
    </>
  );
}

export default App;
