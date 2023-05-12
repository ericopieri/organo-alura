import React from "react";
import "./Formulario.css";

import CampoTexto from "../CampoTexto";
import { useState } from "react";

import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX and Design",
        "Mobile",
        "Inovação e Gestão",
    ];

    const [cargo, setCargo] = useState("");
    const [nome, setNome] = useState("");
    const [imagemUrl, setImagemUrl] = useState("");

    return (
        <section className="formulario">
            <form action="">
                <h2>Preencha os dados para criar o card de Colaborador!</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={setNome}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={setCargo}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagemUrl}
                    aoAlterado={setImagemUrl}
                />
                <ListaSuspensa items={times} label={"Times"} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
};

export default Formulario;
