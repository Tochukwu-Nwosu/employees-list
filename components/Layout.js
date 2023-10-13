import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Navbar />
            { children}
            <Footer />
        </div>
    );
}
 
export default Layout;