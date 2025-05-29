import { Form, Input, Button, message } from "antd";
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
					className="formulario"
					style={{ width: "100%" }}
				>
					<Form.Item
						label="Nome"
						name="name"
						className="itemFormularioContato"
						rules={[
							{
								required: true,
								message: "Por favor, insira seu nome",
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined />
							}
							placeholder="Seu nome"
							aria-required="true"
							style={{
								maxWidth: "30rem",
							}}
						/>
					</Form.Item>
					<div className="contatoEmail">
						<Form.Item
							label="E-mail"
							name="email"
							className="itemFormularioContato"
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
								prefix={
									<MailOutlined />
								}
								placeholder="seu@email.com"
								aria-required="true"
								style={{
									maxWidth: "25rem",
								}}
							/>
						</Form.Item>

						<Form.Item
							label="Assunto"
							name="assunto"
							className="itemFormularioContato"
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
								style={{
									maxWidth: "20rem",
								}}
							/>
						</Form.Item>
					</div>

					<Form.Item
						label="Mensagem"
						name="message"
						className="textoContato"
						rules={[
							{
								required: true,
								message: "Digite sua mensagem",
							},
						]}
					>
						<Input.TextArea
							rows={4}
							placeholder="Escreva sua mensagem..."
							aria-required="true"
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							block
							style={{
								height: "45px",
								fontSize: "16px",
								maxWidth: "20rem",
								width: "10rem",
							}}
						>
							Enviar
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Contato;
