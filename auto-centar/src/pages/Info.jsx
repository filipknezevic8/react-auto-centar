import React from "react";
import Locations from "../components/Locations";

const Info = () => {
    return (
        <div className="page">
            <h1>Informacije</h1><br></br>
            <p>
                Naša kompanija posluje više od 15 godina i usmerena je na prodaju
                novih i polovnih vozila. Ponosimo se kvalitetom usluge i velikim
                brojem zadovoljnih klijenata.
            </p><br></br>
            <Locations />
        </div>
    );
};

export default Info;