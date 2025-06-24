import React from "react";
import { Typography, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import "./inep.css";

const { Title } = Typography;

const instrumentos = [
    {
        titulo: "INSTRUMENTOS DE AVALIAÇÃO DE CURSOS DE GRADUAÇÃO (IACG) – INEP – 2017",
        link: "#",
    },
    {
        titulo: "INSTRUMENTOS DE AVALIAÇÃO INSTITUCIONAL EXTERNA (IAIE) – PRESENCIAL E A DISTÂNCIA – RECREDENCIAMENTO – INEP 2017",
        link: "#",
    },
    {
        titulo: "INSTRUMENTO DE AVALIAÇÃO DE CURSOS DE GRADUAÇÃO PRESENCIAL E A DISTÂNCIA: Autorização",
        link: "#",
    },
    {
        titulo: "INSTRUMENTO DE AVALIAÇÃO DE CURSOS DE GRADUAÇÃO PRESENCIAL E A DISTÂNCIA: Reconhecimento e renovação de reconhecimento",
        link: "#",
    },
];

function Inep() {
    return (
        <div className="containerInstrumentos">
            <div className="conteudoInstrumentos">
                <Title level={2} className="titulo-principal">
                    Instrumentos de Avaliação (INEP)
                </Title>

                <div className="listaInstrumentos">
                    {instrumentos.map((item, index) => (
                        <Button
                            key={index}
                            type="default"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<LinkOutlined />}
                            className="botaoInstrumento"
                        >
                            {item.titulo}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Inep;
