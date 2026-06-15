import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand brand-logo" to="/">
                        <img
                            src="/img/pata-boss.png"
                            alt="friestore logo"
                            className="navbar-brand-logo rounded-circle shadow-sm"
                            style={{
                                height: '80px',
                                width: '80px',
                                objectFit: 'cover',
                                border: '2px solid #ffc107' // Un piccolo bordino dorato che richiama il tema delle patatine
                            }} />
                    </NavLink>

                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Apri menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Prodotti
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">
                                    Categorie
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    Chi siamo
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contatti
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="btn btn-header-order" to="/products">
                                    Ordina ora
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;