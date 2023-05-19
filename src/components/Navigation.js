import { NavLink } from "react-router-dom"
import './component-styles.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="navigation-link">Koti</NavLink>
            <NavLink to="/tavoitteet" className="navigation-link">Tavoitteet</NavLink>
            <NavLink to="/vetoomus" className="navigation-link">Vetoomus</NavLink>
        </nav>
    );
}

export default Navigation