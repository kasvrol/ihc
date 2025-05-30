import {
	Form,
	Input,
	Button,
	Select,
	DatePicker,
	Upload,
	Radio,
	message,
	Space,
	Divider,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const { Option } = Select;
const { TextArea } = Input;
import "./impugnacao.css";

function FormularioImpugnacao() {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log("Form values:", values);
		message.success("Solicitação enviada com sucesso!");
		form.resetFields();
	};

	const onFinishFailed = () => {
		message.error(
			"Por favor, preencha todos os campos obrigatórios."
		);
	};

	return (
		<div className="containerContato">
			<div className="contatoFormulario">
				<h2 className="titulo-principal">Formulário de Impugnação ou Recurso</h2>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="on"
					aria-label="Formulário de Impugnação ou Recurso"
					className="formularioImpugnacao"
					size="large"
				>
					{/* Seção: Dados Pessoais */}
					<div className="secao-formulario">
						<div className="secao-titulo">Dados Pessoais</div>

						<div className="grupo-campos">
							<Form.Item
								label="Nome completo"
								name="nome"
								className="campo-formulario campo-completo"
								rules={[
									{
										required: true,
										message: "Informe seu nome completo.",
									},
								]}
							>
								<Input placeholder="Seu nome completo" />
							</Form.Item>
						</div>

						<div className="grupo-campos">
							<Form.Item
								label="CPF"
								name="cpf"
								className="campo-formulario campo-pequeno"
								rules={[
									{
										required: true,
										message: "Informe seu CPF.",
									},
								]}
							>
								<Input
									placeholder="000.000.000-00"
									maxLength={14}
								/>
							</Form.Item>

							<Form.Item
								label="Telefone para contato"
								name="telefone"
								className="campo-formulario campo-pequeno"
								rules={[
									{
										required: true,
										message: "Informe um telefone válido.",
									},
								]}
							>
								<Input placeholder="(00) 00000-0000" />
							</Form.Item>

							<Form.Item
								label="E-mail"
								name="email"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Informe um e-mail.",
									},
									{
										type: "email",
										message: "E-mail inválido.",
									},
								]}
							>
								<Input placeholder="seu@email.com" />
							</Form.Item>
						</div>
					</div>

					<Divider />

					{/* Seção: Dados do Processo */}
					<div className="secao-formulario">
						<div className="secao-titulo">Dados do Processo Seletivo</div>

						<div className="grupo-campos">
							<Form.Item
								label="Número do Edital"
								name="edital"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Informe o número do edital.",
									},
								]}
							>
								<Input placeholder="Ex: 01/2025" />
							</Form.Item>

							<Form.Item
								label="Cargo/Função/Curso ao qual se candidatou"
								name="cargo"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Campo obrigatório.",
									},
								]}
							>
								<Input placeholder="Informe o cargo/função/curso" />
							</Form.Item>

							<Form.Item
								label="Data da Divulgação do Resultado"
								name="dataResultado"
								className="campo-formulario campo-pequeno"
							>
								<DatePicker
									format="DD/MM/YYYY"
									style={{ width: "100%" }}
									placeholder="Selecione a data"
									disabledDate={(current) =>
										current && current > dayjs()
									}
								/>
							</Form.Item>
						</div>
					</div>

					<Divider />

					{/* Seção: Detalhes da Solicitação */}
					<div className="secao-formulario">
						<div className="secao-titulo">Detalhes da Solicitação</div>

						<div className="grupo-campos">
							<Form.Item
								label="Tipo de Solicitação"
								name="tipoSolicitacao"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Selecione o tipo de solicitação.",
									},
								]}
							>
								<Select placeholder="Selecione uma opção">
									<Option value="impugnacao">
										Impugnação de Edital
									</Option>
									<Option value="recurso">
										Recurso contra resultado parcial
									</Option>
									<Option value="outro">
										Outro (especificar abaixo)
									</Option>
								</Select>
							</Form.Item>

							<Form.Item
								label="Especificação do Tipo (se marcou 'Outro')"
								name="outroTipo"
								className="campo-formulario campo-medio"
							>
								<Input placeholder="Especificar, se necessário" />
							</Form.Item>
						</div>

						<div className="grupo-campos">
							<Form.Item
								label="Etapa do Processo Seletivo Relacionada"
								name="etapa"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Campo obrigatório.",
									},
								]}
							>
								<Select placeholder="Selecione a etapa">
									<Option value="inscricao">Inscrição</Option>
									<Option value="analise">Análise curricular</Option>
									<Option value="prova">Prova escrita</Option>
									<Option value="entrevista">Entrevista</Option>
									<Option value="resultado">Resultado final</Option>
									<Option value="etapaOutro">Outro</Option>
								</Select>
							</Form.Item>

							<Form.Item
								label="Motivo da Impugnação/Recurso"
								name="motivo"
								className="campo-formulario campo-medio"
								rules={[
									{
										required: true,
										message: "Campo obrigatório.",
									},
								]}
							>
								<Input placeholder="Informe o motivo principal" />
							</Form.Item>
						</div>

						<Form.Item
							label="Descrição Detalhada"
							name="descricao"
							className="campo-formulario campo-completo"
						>
							<TextArea
								rows={4}
								placeholder="Descreva os detalhes da sua solicitação de forma clara e objetiva"
							/>
						</Form.Item>
					</div>

					<Divider />

					{/* Seção: Informações Adicionais */}
					<div className="secao-formulario">
						<div className="secao-titulo">Informações Adicionais</div>

						<div className="grupo-campos">
							<Form.Item
								label="Você já enviou alguma manifestação anterior sobre este processo?"
								name="manifestacaoAnterior"
								className="campo-formulario campo-medio"
							>
								<Radio.Group className="grupo-radio">
									<Radio value="sim">Sim</Radio>
									<Radio value="nao">Não</Radio>
								</Radio.Group>
							</Form.Item>

							<Form.Item
								label="Se sim, informe o número do protocolo anterior ou data do envio"
								name="protocoloAnterior"
								className="campo-formulario campo-medio"
							>
								<Input placeholder="Ex: Protocolo 12345 ou 01/01/2025" />
							</Form.Item>
						</div>

						<Form.Item
							label="Anexos (documentos comprobatórios)"
							name="anexos"
							className="campo-formulario campo-completo"
							valuePropName="fileList"
							getValueFromEvent={(e) =>
								Array.isArray(e) ? e : e?.fileList
							}
						>
							<Upload.Dragger
								name="files"
								multiple
								beforeUpload={() => false}
								className="area-upload"
							>
								<p className="ant-upload-drag-icon">
									<InboxOutlined />
								</p>
								<p className="ant-upload-text">
									Clique ou arraste arquivos para anexar
								</p>
								<p className="ant-upload-hint">
									Formatos aceitos: PDF, DOC, DOCX, JPG, PNG
								</p>
							</Upload.Dragger>
						</Form.Item>

						<Form.Item
							label="Deseja receber cópia da solicitação por e-mail?"
							name="copiaEmail"
							className="campo-formulario campo-completo"
						>
							<Radio.Group className="grupo-radio">
								<Radio value="sim">Sim</Radio>
								<Radio value="nao">Não</Radio>
							</Radio.Group>
						</Form.Item>
					</div>

					<div className="botao-envio">
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								size="large"
								style={{
									height: 48,
									width: 200,
									borderRadius: 8,
									fontWeight: 600
								}}
							>
								Enviar Solicitação
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default FormularioImpugnacao;