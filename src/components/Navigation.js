import { Link } from "react-router-dom"
import './component-styles.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="navigation-link">Koti</Link>
            <Link to="/tavoitteet" className="navigation-link">Tavoitteet</Link>
            <Link to="/vetoomus" className="navigation-link">Vetoomus</Link>
        </nav>
    );
}

export default Navigation