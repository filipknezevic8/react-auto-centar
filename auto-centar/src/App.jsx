import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Actions from "./pages/Actions";
import About from "./pages/About";
import Info from "./pages/Info";
import Content from "./pages/Content";
import "./styles/styles.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/ponuda" />} />
                        <Route path="/akcije" element={<Actions />} />
                        <Route path="/o-nama" element={<About />} />
                        <Route path="/informacije" element={<Info />} />
                        <Route path="/ponuda" element={<Content />} />
                        <Route path="*" element={<h2>404 - Stranica nije pronađena</h2>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;