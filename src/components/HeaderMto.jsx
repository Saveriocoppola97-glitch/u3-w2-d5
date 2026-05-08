import { Link } from "react-router-dom";

const HeaderMto = function () {
  return (
    <header>
      <nav
        style={{
          backgroundColor: "#233a8e",
        }}
        className="navbar px-4 py-2"
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src="/LogoMeteo.png" style={{ width: "165px" }} />
          </a>
        </div>
      </nav>
      <nav
        style={{
          background: "linear-gradient(to bottom, #1155a389, #233a8e)",
        }}
        className="navbar navbar-expand-lg bg-primary px-5 py-2"
        data-bs-theme="dark"
      >
        <div className="container-fluid fs-4">
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold" to="/">
                  Previsioni
                  <i className="bi bi-chevron-down mx-2"></i>
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold" to="/tv-shows">
                  Regioni
                  <i className="bi bi-chevron-down mx-2"></i>
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold" to="/movies">
                  Notizie
                  <i className="bi bi-chevron-down mx-2"></i>
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold" to="/recently-added">
                  Info
                  <i className="bi bi-chevron-down mx-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMto;
