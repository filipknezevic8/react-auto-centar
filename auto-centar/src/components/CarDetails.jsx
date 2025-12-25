import React from "react";
import { useSearchParams } from "react-router-dom";
import { cars } from "../data/cars";

const CarDetails = () => {
    const [params] = useSearchParams();
    const selectedId = params.get("id") || "dream";
    const car = cars.find(c => c.id === selectedId);

    if (!car) return <p>Automobil nije pronađen.</p>;

    return (
        <div className="car-details">
            <div className="car-image">
                <img src={car.image} alt={car.model.name} />
            </div>
            <div className="car-info">
                <h3>Izračunaj cenu svog auta iz snova</h3>
                <p><strong>Model automobila:</strong> {car.model.name}</p>
                <p><strong>Tip motora:</strong> {car.defaultEngine}</p>
                <p>
                    <strong>Boja automobila:</strong>
                    <span className="color-box" style={{ background: car.colorHex }}></span>
                    {car.colorHex}
                </p>
                <p><strong>Tip boje automobila:</strong> {car.finish}</p>
                <p><strong>Opseg cene:</strong> {car.price.fromEUR}€ – {car.price.toEUR}€</p>
                <p><strong>Kontakt mejl:</strong> primer@email.com</p>
            </div>
        </div>
    );
};

export default CarDetails;