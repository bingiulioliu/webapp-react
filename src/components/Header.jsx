import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import "../components/Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                Potato Shop
            </div>

            <nav>
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
            </nav>
        </header>
    );
}

export default Header;