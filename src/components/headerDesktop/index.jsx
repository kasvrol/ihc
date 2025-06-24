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
		key: "uab",
		label: "UAB",
		children: [
			{
				label: <Link to="/uab-impugnacao">Contato para Recurso ou Impugnação</Link>,
				key: "uab-impugnacao",
			},
		],
	},
	{
		key: "sobre",
		label: <Link to="/sobre">Sobre</Link>
	},
	{
		label: <Link to="/cursos-ead">Cursos com carga horária EaD</Link>,
		key: "cursos-ead",
	},
	{
		key: "contato",
		label: <Link to="/contato">Contato</Link>,
	},
	{
		key: "curriculo",
		label: <Link to="/curriculo">Quem construiu o site</Link>,
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
