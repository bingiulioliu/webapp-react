import { NavLink } from "react-router-dom";
import "../components/Footer.css";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <h3>Potato Shop</h3>
                    <p>Patate fresche, direttamente a casa tua.</p>
                </div>

                <div className="footer-section">
                    <h3>Link utili</h3>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Prodotti</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Chi siamo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contatti</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contatti</h3>
                    <p>info@potatoshop.it</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Potato Shop
            </div>
        </footer>
    );
}

export default Footer;
