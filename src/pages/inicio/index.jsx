import SitesFaceis from "../../components/sitesFaceis";
import Editais from "../../components/editais";
import "./inicio.css";
import { Descriptions } from "antd";

const Inicio = () => {
	return (
		<div className="containerInicio">
			<div className="containerEditais">
			<div className="tituloEditais">
				
				<h1>Bem-vindo à Superintendência de
						Inovação Pedagógica e Educação a
						Distância (SEaDIP) da
						Universidade Federal do Paraná
						(UFPR). </h1>
			</div>
				<div className="listaEditais">
					<Descriptions.Item>
						A SEaDIP foi criada com
						a nova gestão da UFPR, que
						assume o período de 2025-2028, e
						está diretamente vinculada à
						Reitoria. Nossa missão é
						coordenar ações estratégicas que
						promovam a inovação pedagógica,
						incentivem a educação aberta e
						fortaleçam a educação a
						distância na universidade. Nosso
						trabalho visa modernizar os
						processos formativos, ampliando
						o acesso ao ensino superior de
						qualidade para um número cada
						vez maior de pessoas.
					</Descriptions.Item>
				</div>
			</div>

			<Editais />
			<SitesFaceis />
		</div>
	);
};
export default Inicio;
