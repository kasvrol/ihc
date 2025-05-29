import React, { useState } from "react";
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
	{
		key: "inicio",
		label: (
			<a
				href="https://ant.design"
				target="_blank"
				rel="noopener noreferrer"
			>
				Início
			</a>
		),
	},
	{
		label: "UAB",
		key: "uab",
		icon: <SettingOutlined />,
		children: [
			{
				type: "group",
				label: "Item 1",
				children: [
					{ label: "Option 1", key: "setting:1" },
					{ label: "Option 2", key: "setting:2" },
				],
			},
			{
				type: "group",
				label: "Item 2",
				children: [
					{ label: "Option 3", key: "setting:3" },
					{ label: "Option 4", key: "setting:4" },
				],
			},
		],
	},
	{
		key: "contato",
		label: (
			<a
				href="https://ant.design"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contato
			</a>
		),
	},
];

const HeaderDesktop = () => {
	const [current, setCurrent] = useState("inicio");
	const onClick = (e) => {
		console.log("click ", e);
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
