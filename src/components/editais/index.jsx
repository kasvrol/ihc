import { Descriptions } from "antd";
import {
  SwapOutlined
} from '@ant-design/icons';
import { useState } from "react";

import "./editais.css"
import { Link } from "react-router-dom";

const Editais = () => {
	const listaEditais = [{
		nome: 'EDITAL Nº 18/2025 – PROCESSO SELETIVO PARA PROFESSOR DE CURSOS DE GRADUAÇÃO EM PEDAGOGIA EAD DA UNIVERSIDADE ABERTA DO BRASIL NO ÂMBITO DA UNIVERSIDADE FEDERAL DO PARANÁ',
		descricao: 'A Superintendência de Educação a Distância e Inovações Pedagógicas (SEaDIP), no uso de suas atribuições e prerrogativas legais, torna público o Edital do resultado, classificação final e recurso para...',
		data: '04/02/2025',
	},
	{
		nome: 'EDITAL Nº 16/2025 – RESULTADO FINAL – PROCESSO DE SELEÇÃO PARA CONCESSÃO DE BOLSA DE COORDENADOR DE TUTORIA PARA ATUAR NO PROGRAMA SISTEMA UNIVERSIDADE ABERTA DO BRASIL (UAB) DA UNIVERSIDADE FEDERAL DO PARANÁ (UFPR).',
		descricao: 'A Superintendência de Educação a Distância e Inovações Pedagógicas (SEaDIP), no uso de suas atribuições e prerrogativas legais, torna público o Edital do resultado, classificação final e recurso para...',
		data: '03/02/2025',
		},
		{
			nome: 'EDITAL Nº 15/2025 – RESULTADO PRELIMINAR E CONVOCAÇÃO PARA ENTREVISTA – SELEÇÃO DE BOLSISTAS PARA ATUAÇÃO NAS AREAS DE AUDIOVISUAL E SUPORTE DE TECNOLOGIA DA INFORMAÇÃO NO LABORATÓRIO DE CULTURA DIGITAL, DA UNIVERSIDADE FEDERAL DO PARANÁ (UFPR)',
			descricao: 'A Superintendência de Educação a Distância e Inovações Pedagógicas (SEaDIP), no uso de suas atribuições e prerrogativas legais, torna público o Resultado Preliminar para seleção de bolsistas para atu...',
			data: '02/02/2025',
		},
		{
			nome: 'EDITAL Nº 14/2025 – SELEÇÃO DE BOLSISTAS PARA ATUAÇÃO NAS AREAS DE AUDIOVISUAL E SUPORTE DE TECNOLOGIA DA INFORMAÇÃO NO LABORATÓRIO DE CULTURA DIGITAL, DA UNIVERSIDADE FEDERAL DO PARANÁ (UFPR).',
			descricao: 'A Universidade Federal do Paraná – (UFPR), Instituição de Ensino Superior integrante do Sistema Federal de Ensino, participante do programa de formação a distância instituído pelo Ministério da Educa...',
			data: '01/02/2025',
		}]
	const [listagem, setListagem] = useState(listaEditais)
	const [titulo, setTitulo] = useState(false)

	const mudanca = () => {
		setListagem(listagem.reverse())
		setTitulo(!titulo)
	}


	return (
		<div className="containerEditais">
			<div className="tituloEditais">
				<section onClick={()=> mudanca()}><SwapOutlined  rotate={90}/></section>
				{/*icon */}
				<h3>{titulo? "Mais Antigos":"Mais Recentes"}</h3>
			</div>
			<div className="listaEditais">
				{listagem.map((edital, index) => {
					return (
						<Descriptions title={edital.nome} key={index}  className="edital">
							<Descriptions.Item>
								<section className="descricaoEdital">
								<article>{edital.descricao}</article>
									<p>{edital.data}</p>
									<Link to={'/edital'}>Leia mais</Link>
								</section>							
							</Descriptions.Item>							
						</Descriptions>
					)
				})}
			</div>
			
		</div>
	);
};
export default Editais;
