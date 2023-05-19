import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="container">
            <h1 className="item-title page-title blue-text">Hups! Tätä sivua ei löytynyt.</h1>
            <p className="body-text blue-text">Voit palata kotisivulle <Link to="/">tästä</Link>.</p>
        </div>
    );
}

export default NoPage;