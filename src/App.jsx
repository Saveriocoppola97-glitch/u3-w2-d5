import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Region from "./components/Region";
import HeaderMto from "./components/HeaderMto";
import HeaaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Container>
          <HeaderMto />
        </Container>
      </header>
      <main>
        <Container>
          <HeaaderSection />
          <Routes>
            <Route path="/city/:name" element={<MainSection />} />
            <Route path="/region/" element={<Region />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
