import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row gy-4 align-items-start">
                    <div className="col-12 col-lg-5">
                        <Link to="/" className="footer-brand">
                            <span className="brand-icon">🍟</span>
                            <span>Friestore</span>
                        </Link>

                        <p className="footer-text mt-3">
                            Il negozio dove la patata smette di essere un contorno e diventa
                            leggenda croccante.
                        </p>

                        <p className="footer-copy mb-0">
                            © 2026 Friestore - Tutti i diritti riservati ai golosi.
                        </p>
                    </div>

                    <div className="col-6 col-lg-3">
                        <h3 className="footer-title">Link utili</h3>

                        <ul className="footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Prodotti</Link>
                            </li>
                            <li>
                                <a href="/#categories">Categorie</a>
                            </li>
                            <li>
                                <Link to="/about">Chi siamo</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-4">
                        <h3 className="footer-title">Contatti</h3>

                        <ul className="footer-links">
                            <li>
                                <a href="mailto:info@friestore.it">info@friestore.it</a>
                            </li>
                            <li>Via delle Patate Dorate 12, Versolinfinitoeoltre</li>
                            <li>@friestore.shop</li>
                        </ul>

                        <div className="footer-socials">
                            <a href="#" aria-label="Instagram">◎</a>
                            <a href="#" aria-label="Preferiti">♡</a>
                            <a href="#" aria-label="Condividi">↗</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
