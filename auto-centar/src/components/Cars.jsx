import React from "react";
import { useSearchParams } from "react-router-dom";
import { cars } from "../data/cars";

const Cars = () => {
    const [params] = useSearchParams();
    const selectedId = params.get("id") || "dream";
    return (
        <div className="cars-list">
            {cars.map(car => (
                <div
                    key={car.id}
                    className={`car-item ${selectedId === car.id ? "selected" : ""}`}
                >
                    <img src={car.image} alt={car.model.name} />
                    <p>Već od {car.price.fromEUR}€</p>
                </div>
            ))}
        </div>
    );
};

export default Cars;