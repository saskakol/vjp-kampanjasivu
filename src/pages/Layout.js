import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import './page-styles.css';

const Layout = () => {
    return (
        <>
            <header className="container">
                <Navigation />
            </header>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;