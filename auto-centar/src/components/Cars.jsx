import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { cars } from "../data/cars";

const Cars = () => {
    const [params] = useSearchParams();
    const selectedId = params.get("id") || "dream";
    return (
        <div className="cars-list">
            {cars.map(car => (
                <Link
                    key={car.id}
                    to={`/ponuda?id=${car.id}`}
                    className={`car-item ${selectedId === car.id ? "selected" : ""}`}
                >
                    <img src={car.image} alt={car.model.name} />
                    <p>Već od {car.price.fromEUR}€</p>
                </Link>
            ))}
        </div>
    );
};

export default Cars;