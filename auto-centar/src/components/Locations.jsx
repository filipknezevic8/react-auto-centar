import React from "react";
import { locations } from "../data/locations";

const Locations = () => {
    return (
        <div className="locations-container">
            <h2>Prodajne lokacije</h2>
            <div className="locations-list">
                {locations.map(loc => (
                    <div key={loc.name} className="location-card">
                        <h3>{loc.name}</h3>
                        <p className="address">
                            Adresa: {loc.address}, {loc.city}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;