import { useState } from "react";
import { Collapse, List, Button, Typography } from "antd";
import { setores } from "./setores";

const { Panel } = Collapse;
const { Text } = Typography;
import "./listaCursosEaD.css";

const ListaCursosEaD = () => {
  const [activeSetores, setActiveSetores] = useState([]); 
  const [activeCursos, setActiveCursos] = useState({}); 
  const [activeDisciplinas, setActiveDisciplinas] = useState({});

  const toggleCurso = (setorId, cursoId) => {
    setActiveCursos((prevState) => ({
      ...prevState,
      [setorId]: prevState[setorId] === cursoId ? null : cursoId, 
    }));
  };

  const toggleDisciplina = (setorId, cursoId, disciplinaId) => {
    setActiveDisciplinas((prevState) => ({
      ...prevState,
      [setorId]: {
        ...(prevState[setorId] || {}),
        [cursoId]: prevState[setorId]?.[cursoId] === disciplinaId ? null : disciplinaId,
      },
    }));
  };

	return (
		<div className="containerListaCursos">
		<List
			header={<h2>Lista de Setores</h2>}
			bordered
				dataSource={setores}
				className="listaPricipal"
			renderItem={(setor) => (
				<List.Item key={setor.id}>
					<Collapse
						activeKey={activeSetores}
						onChange={(keys) => setActiveSetores(keys)}
						accordion 
					>
						<Panel header={setor.nome} key={setor.id}>
							<List
								dataSource={setor.cursos}
								renderItem={(curso) => (
									<List.Item key={curso.id}>
										<Collapse
											activeKey={activeCursos[setor.id] ? [activeCursos[setor.id]] : []} 
											onChange={() => toggleCurso(setor.id, curso.id)}
											accordion
										>
											<Panel header={curso.nome} key={curso.id}>
												<List
													dataSource={curso.disciplinas}
													renderItem={(disciplina) => (
														<List.Item key={disciplina.id} className="listaDiciplinas">
															<Button
																onClick={() => toggleDisciplina(setor.id, curso.id, disciplina.id)}
															>
																{disciplina.nome}
															</Button>
															{activeDisciplinas[setor.id]?.[curso.id] === disciplina.id && (
																<div style={{ marginTop: "10px" }}>
																	<Text strong>📄 Ementa:</Text>
																	<p>{disciplina.ementa}</p>
																</div>
															)}
														</List.Item>
													)}
												/>
											</Panel>
										</Collapse>
									</List.Item>
								)}
							/>
						</Panel>
					</Collapse>
				</List.Item>
			)}
		/>
	</div>
	);
};
export default ListaCursosEaD;
