import React from "react";
import Locations from "../components/Locations";
import Cars from "../components/Cars";
import CarDetails from "../components/CarDetails";

const Content = () => {
    return (
        <div className="content-layout">
            <Locations />
            <div className="offer-section">
                <CarDetails />
                <Cars />
            </div>
        </div>
    );
};

export default Content;