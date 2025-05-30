import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const HeaderMobile = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<>
			{/* Botão hamburguer */}
			<Button
				type="primary"
				icon={<MenuOutlined />}
				onClick={showDrawer}
				style={{
					position: "fixed",
					top: 20,
					left: 20,
					zIndex: 1000,
				}}
			>
				Menu
			</Button>

			<Drawer
				title="Navegação"
				placement="left"
				onClose={onClose}
				visible={visible}
				width={250}
			>
				<Menu mode="inline">
					<Link to={"/"}>
						<Menu.Item key="home">
							Início
						</Menu.Item>
					</Link>

					<SubMenu key="UAB" title="UAB">
					<Link to={"/uab-impugnacao"}>
						<Menu.Item key="uab-impugnacao">
						Recurso ou Impugnação
						</Menu.Item>
					</Link>
					</SubMenu>

					<SubMenu key="sobre" title="Sobre">
					<Link to={"/"}>
						<Menu.Item key="cursos-ead">
						Cursos com carga horária EaD
						</Menu.Item>
					</Link>
					<Link to={"/manual-site"}>
						<Menu.Item key="manual-site">
						Manual do Site
						</Menu.Item>
					</Link>
					</SubMenu>

					<Link to={"/contato"}>
						<Menu.Item key="contato">
							Contato
						</Menu.Item>
					</Link>
					<Link to={"/curriculo"}>
						<Menu.Item key="curriculo">	
							Desenvolvedores
						</Menu.Item>
					</Link>
				</Menu>
			</Drawer>
		</>
	);
};
export default HeaderMobile;
