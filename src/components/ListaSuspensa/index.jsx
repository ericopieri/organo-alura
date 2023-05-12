import React from "react";

import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, items }) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select>
                {items.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
