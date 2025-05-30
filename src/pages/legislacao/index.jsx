import React from "react";
import { Card, Typography, Divider } from "antd";
import "./legislacao.css";

const { Title, Paragraph } = Typography;

const legislacoesUFPR = [
    "RESOLUÇÃO nº 28/08 – CEPE: Fixa normas básicas de controle e registro da atividade acadêmica dos cursos de Aperfeiçoamento e Especialização na modalidade de Educação a Distância da Universidade Federal do Paraná.",
    "RESOLUÇÃO nº 83/08 – CEPE: Aprova as normas básicas da atividade acadêmica dos Cursos de Graduação na modalidade de Educação à Distância da Universidade Federal do Paraná.",
    "RESOLUÇÃO Nº. 08/03 – COUN: Estabelece o Regimento Interno da Coordenadoria de Integração de Políticas e Educação a Distância – CIPEAD (Antigo NEAD) da Universidade Federal do Paraná.",
];

const legislacoesUAB = [
    "PORTARIA CAPES Nº 309, DE 27 DE SETEMBRO DE 2024: Regulamenta critérios, estrutura organizacional e normas para seleção de bolsistas e o pagamento de bolsas no âmbito do Sistema Universidade Aberta do Brasil (UAB).",
    "INSTRUÇÃO NORMATIVA GAB Nº 1, DE 10 DE OUTUBRO DE 2024: Estabelece os limites quantitativos, os parâmetros de cálculo e os procedimentos para concessão e pagamento de bolsas no Sistema Universidade Aberta do Brasil (UAB).",
    "PORTARIA CAPES Nº 33, DE 16 DE FEVEREIRO DE 2023: Dispõe sobre o reajuste dos valores das bolsas da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior – CAPES, no país.",
];

const legislacoesNacionais = [
    "LEI Nº 9.394, DE 20 DE DEZEMBRO DE 1996: Estabelece as diretrizes e bases da educação nacional.",
    "RESOLUÇÃO CNE/CES Nº 4, DE 29 DE MAIO DE 2024: Aprova as normas básicas da atividade acadêmica dos Cursos de Graduação na modalidade de Educação à Distância.",
    "PORTARIA Nº 2.117, DE 6 DE DEZEMBRO DE 2019: Dispõe sobre a oferta de carga horária na modalidade de Ensino a Distância – EaD em cursos de graduação presenciais ofertados por Instituições de Educação Superior.",
];

const pareceres = [
    "PARECER CNE/CES Nº 734, APROVADO EM 6 DE OUTUBRO DE 2022: Solicitação de manifestação e emissão de uma resolução para questões relacionadas ao Ensino a Distância, destacadas na Nota Técnica nº 635/2019/CGLNRS/DPR/SERES.",
    "PARECER CNE/CES Nº 913/2019, APROVADO EM 9 DE OUTUBRO DE 2019: Possibilidade de transferência do ato de credenciamento institucional por modalidade para outra IES credenciada.",
    "PARECER CNE/CES Nº 389/2019, APROVADO EM 9 DE MAIO DE 2019: Consulta sobre instrumentos de avaliação externa de Instituições de Educação Superior elaborados pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira.",
    "PARECER CNE/CES Nº 785 /2016, APROVADO EM 10 DE NOVEMBRO DE 2016: Consulta referente às atribuições dos órgãos de fiscalização profissional, e sobre o graduado em curso ofertado na modalidade a distância.",
    "PARECER CNE/CES Nº 564/2015, APROVADO EM 10 DE DEZEMBRO DE 2015: Diretrizes e Normas Nacionais para a oferta de Programas e Cursos de Educação Superior na Modalidade a Distância.",
    "PARECER CNE/CEB Nº 13/2015, APROVADO EM 11 DE NOVEMBRO DE 2015: Reexame do Parecer CNE/CEB nº 2/2015, que reexaminou o Parecer CNE/CEB nº 12/2012...",
    "PARECER CNE/CEB Nº 2/2015, APROVADO EM 11 DE MARÇO DE 2015: Reexame do Parecer CNE/CEB nº 12/2012...",
    "PARECER CNE/CEB Nº 12/2012, APROVADO EM 10 DE MAIO DE 2012: Diretrizes Operacionais para a oferta de Educação a Distância...",
    "PARECER CNE/CP Nº 3/2011, APROVADO EM 31 DE MAIO DE 2011: Recurso contra a decisão do Parecer CNE/CES n° 18/2010...",
];

function Legislacao() {
    return (
        <div className="containerLegislacao">
            <div className="conteudoLegislacao">
                <Title level={2} className="titulo-principal">
                    Legislações e Pareceres
                </Title>

                <Card title="Legislação UFPR" className="card-legislacao">
                    {legislacoesUFPR.map((texto, index) => (
                        <Paragraph key={index}>» {texto}</Paragraph>
                    ))}
                </Card>

                <Divider />

                <Card title="Legislação UAB" className="card-legislacao">
                    {legislacoesUAB.map((texto, index) => (
                        <Paragraph key={index}>» {texto}</Paragraph>
                    ))}
                </Card>

                <Divider />

                <Card title="Legislação Nacional" className="card-legislacao">
                    {legislacoesNacionais.map((texto, index) => (
                        <Paragraph key={index}>» {texto}</Paragraph>
                    ))}
                </Card>

                <Card title="Pareceres (CNE)" className="card-legislacao">
                    {pareceres.map((texto, index) => (
                        <Paragraph key={index}>» {texto}</Paragraph>
                    ))}
                </Card>
            </div>
        </div>
    );
}

export default Legislacao;
