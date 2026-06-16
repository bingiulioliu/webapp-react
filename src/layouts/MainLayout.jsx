import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PotatoAgentModal from "../components/PotatoAgentModal.jsx";



function MainLayout() {
    return (
        <>
            <Header />
            <main className="container my-4">
                <Outlet />
                <PotatoAgentModal />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;