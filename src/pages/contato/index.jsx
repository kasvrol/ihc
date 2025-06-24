import { Form, Input, Button, message, Row, Col } from "antd"; // Adicionado Row e Col
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import "./contato.css";

function Contato() {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		// Simula envio
		console.log("Form Data:", values);
		message.success("Mensagem enviada com sucesso!");
		form.resetFields();
	};

	const onFinishFailed = () => {
		message.error("Por favor, corrija os erros antes de enviar.");
	};

	return (
		// Mantém a estrutura do container externo que já funcionava com o padrão das outras páginas
		<div className="containerContato">
			<div className="contatoFormulario">
				<h2>Entre em Contato</h2>
				<Form
					form={form}
					name="contact"
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="on"
					aria-label="Formulário de Contato"
					className="formulario" // A classe .formulario agora só precisa de ajustes mínimos
				>
					<Form.Item
						label="Nome"
						name="name"
						rules={[
							{
								required: true,
								message: "Por favor, insira seu nome",
							},
						]}
					>
						<Input
							prefix={<UserOutlined />}
							placeholder="Seu nome completo"
							aria-required="true"
						/>
					</Form.Item>

					{/* Usando Row e Col para E-mail e Assunto */}
					<Row gutter={[16, 0]}> {/* gutter={[horizontalSpacing, verticalSpacing]} */}
						<Col xs={24} sm={24} md={12}> {/* Ocupa 24 colunas (total) em telas extra pequenas e pequenas, 12 (metade) em médias e maiores */}
							<Form.Item
								label="E-mail"
								name="email"
								rules={[
									{
										required: true,
										message: "Por favor, insira seu e-mail",
									},
									{
										type: "email",
										message: "E-mail inválido",
									},
								]}
							>
								<Input
									prefix={<MailOutlined />}
									placeholder="seu.email@exemplo.com"
									aria-required="true"
								/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Assunto"
								name="assunto"
								rules={[
									{
										required: true,
										message: "Por favor, insira o assunto",
									},
								]}
							>
								<Input
									placeholder="Assunto do contato"
									aria-required="true"
								/>
							</Form.Item>
						</Col>
					</Row>

					<Form.Item
						label="Mensagem"
						name="message"
						rules={[
							{
								required: true,
								message: "Digite sua mensagem",
							},
						]}
					>
						<Input.TextArea
							rows={4}
							placeholder="Escreva sua mensagem aqui..."
							aria-required="true"
						/>
					</Form.Item>

					<Form.Item className="containerBotaoFormulario"> {/* Classe para centralizar/alinhar o botão se necessário */}
						<Button
							type="primary"
							htmlType="submit"
							// O 'block' pode ser útil se o Form.Item tiver largura controlada.
							// Para um botão de largura fixa máxima e centralizado, estilizamos via CSS ou style prop.
							style={{
								height: "45px",
								fontSize: "16px",
								minWidth: "150px", // Garante uma largura mínima
								width: "100%",    // Ocupa a largura disponível no seu container
								maxWidth: "280px", // Mas não passa de 280px
							}}
						>
							Enviar Mensagem
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Contato;