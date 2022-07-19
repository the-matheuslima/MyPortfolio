import React from "react";
import './style.scss';

function Card({ iconsSkills, name }) {
    return (
        <div className="card">
            <img className="img-icons" src={iconsSkills} alt={name} />
        </div>
    )
}

export default Card;
