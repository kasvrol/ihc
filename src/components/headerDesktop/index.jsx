import React, { useState } from "react";
import { Menu } from "antd";
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
	{
		key: "home",
		label: <Link to="/">Início</Link>,
		icon: <AppstoreOutlined />,
	},
	{
		key: "legislacao",
		label: "Legislações EAD",
		children: [
			{
				label: <Link to="/legislacoes">Legislações e Pareceres</Link>,
				key: "legislacoes",
			},
			{
				label: <Link to="/instrumentos-avaliacao">Instrumentos de Avaliação (INEP)</Link>,
				key: "instrumentos-avaliacao",
			},
		],
	},
	{
		key: "uab",
		label: "UAB",
		children: [
			{
				label: <Link to="/uab-impugnacao">Recurso ou Impugnação</Link>,
				key: "uab-impugnacao",
			},
			{
				label: <Link to="/orientacoes-gerais">Orientações Gerais</Link>,
				key: "orientacoes-gerais",
			},
		],
	},
	{
		key: "sobre",
		label: <Link to="/sobre">Sobre</Link>
	},
	{
		label: <Link to="/cursos-ead">Cursos</Link>,
		key: "cursos-ead",
	},
	{
		key: "contato",
		label: <Link to="/contato">Contato</Link>,
	},
	{
		key: "curriculo",
		label: <Link to="/curriculo">Desenvolvedores</Link>,
	},
];

const HeaderDesktop = () => {
	const [current, setCurrent] = useState("home");

	const onClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<Menu
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={items}
		/>
	);
};

export default HeaderDesktop;
