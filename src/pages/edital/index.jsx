import React from "react";
import { Card, Typography, Divider, Button, Space } from "antd";
import {
	DownloadOutlined,
	CalendarOutlined,
	UserOutlined,
	ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../contato/contato.css";

const TelaEdital = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	const cardTitle = (
		<Space align="center">
			<Button
				type="text"
				shape="circle"
				icon={<ArrowLeftOutlined size={44}/>}
        onClick={handleBack}
        style={{ width: "10%", minWidth:"44px", minHeight:"44px"}}
			/>
			<Typography.Title level={3} style={{ margin: 0, width: "90%", height:"auto", textAlign:"justify" }}>
      EDITAL Nº 18/2025 – PROCESSO SELETIVO PARA PROFESSOR DE CURSOS DE GRADUAÇÃO EM PEDAGOGIA EAD DA UNIVERSIDADE ABERTA DO BRASIL NO ÂMBITO DA UNIVERSIDADE FEDERAL DO PARANÁ
			</Typography.Title>
		</Space>
	);

	return (
		<div className="containerContato">
      <div className="contatoFormulario">
        {cardTitle}
				<Space
					direction="horizontal"
					style={{ color: "rgba(0, 0, 0, 0.45)" }}
				>
					<Space>
						<CalendarOutlined />
						<Typography.Text secondary>
							Publicado em: 27 de
							junho de 2025
						</Typography.Text>
					</Space>
					<Divider type="vertical" />
					<Space>
						<UserOutlined />
						<Typography.Text secondary>
							Apresentação por:
							Secretaria de Cultura
						</Typography.Text>
					</Space>
				</Space>

				<Divider />

				<Typography.Paragraph>
        A Universidade Federal do Paraná – (UFPR), Instituição de Ensino Superior integrante do Sistema Federal de Ensino, participante do programa de formação a distância instituído pelo Ministério da Educação/MEC para a oferta do ensino superior gratuito e de qualidade no Brasil, torna pública a seleção de Professores para atuarem nos cursos do Sistema Universidade Aberta do Brasil (UAB) da UFPR, oferecidos com o apoio da Superintendência de Educação a Distância e Inovações Pedagógicas (SEaDIP/UFPR).
				</Typography.Paragraph>

				<Button
					type="primary"
					icon={<DownloadOutlined />}
					size="large"
					href="https://cipead.ufpr.br/wp-content/uploads/2025/05/SEI_7802036_Edital_18_2025.pdf"
					target="_blank"
				>
					Baixar Documento do Edital (PDF)
				</Button>
			</div> 
		</div>
	);
};

export default TelaEdital;
