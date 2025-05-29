import { Button } from "antd";
import "./siteFacil.css";
import { Link } from "react-router-dom";

function SitesFaceis() {
	const listaSites = [
		{
			nome: "UFPR VIRTUAL (MOODLE)",
			link: "https://ufprvirtual.ufpr.br/",
		},
		{
			nome: "UFPR ABERTA",
			link: "https://ufpraberta.ufpr.br/",
		},
		{
			nome: "MINHA BIBLIOTECA",
			link: "https://minhabiblioteca.ufpr.br/biblioteca/",
		},
	];

	return (
		<div className="containerSitesFaceis">
			<h2>Acesso rápido</h2>
			<div className="sitesFaceis">
				{listaSites.map((siteFacil) => {
					return (
						<Link to={siteFacil.link}>
							<div className="siteFacil">
								{siteFacil.nome}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default SitesFaceis;
