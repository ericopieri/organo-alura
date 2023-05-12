import React from "react";
import "./CampoTexto.css";

const CampoTexto = ({
    label,
    valor,
    placeholder,
    obrigatorio = false,
    aoAlterado,
}) => {
    const placeholderModificada = placeholder + "...";

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                type="text"
                onChange={aoDigitado}
                placeholder={placeholderModificada}
                required={obrigatorio}
                value={valor}
            />
        </div>
    );
};

export default CampoTexto;
