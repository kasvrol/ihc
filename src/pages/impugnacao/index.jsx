// ContestationForm.jsx
import {
	Form,
	Input,
	Button,
	Select,
	DatePicker,
	Upload,
	Radio,
	message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const { Option } = Select;
const { TextArea } = Input 
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
				<h2>Formulário de Impugnação ou Recurso</h2>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="on"
					aria-label="Formulário de Impugnação ou Recurso"
					className="formularioImpugnacao"
				>
					<Form.Item
						label="Nome completo"
						className="itemFormularioContatoInteiro"
						name="nome"
						rules={[
							{
								required: true,
								message: "Informe seu nome completo.",
							},
						]}
					>
						<Input placeholder="Seu nome completo" />
					</Form.Item>
					<div className="contatoImpugnacao">
						<Form.Item
							label="CPF"
							name="cpf"
              className="itemFormularioCampoPequeno"
							rules={[
								{
									required: true,
									message: "Informe seu CPF.",
								},
							]}
						>
							<Input style={{
								width: "10rem",
							}}
								placeholder="000.000.000-00"
								maxLength={14}
							/>
						</Form.Item>

						<Form.Item
							label="Telefone para contato"
							name="telefone"
              className="itemFormularioCampoPequeno"
							rules={[
								{
									required: true,
									message: "Informe um telefone válido.",
								},
							]}
						>
							<Input style={{
								width: "10rem",
							}} placeholder="(00) 00000-0000" />
						</Form.Item>

						<Form.Item
							label="E-mail"
							name="email"
              className="itemFormularioContato"
              style={{
                minWidth: "23rem",
                maxWidth:"23rem"
							}}
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
							<Input style={{
								width: "20rem",
							}} placeholder="seu@email.com" />
						</Form.Item>
					</div>
					<div className="contatoImpugnacao">
						<Form.Item
							label="Número do Edital"
							name="edital"
							className="itemFormularioContato"
							rules={[
								{
									required: true,
									message: "Informe o número do edital.",
								},
							]}
						>
							<Input style={{
								width: "20rem",
							}} placeholder="Ex: 01/2025" />
						</Form.Item>

						<Form.Item
							label="Cargo/Função/Curso ao qual se candidatou"
							name="cargo"
							className="itemFormularioContato"
							rules={[
								{
									required: true,
									message: "Campo obrigatório.",
								},
							]}
						>
							<Input style={{
								width: "20rem",
							}} />
						</Form.Item>

						<Form.Item
							label="Data da Divulgação do Resultado"
							name="dataResultado"
							className="itemFormularioContato"
						>
							<DatePicker
								format="DD/MM/YYYY"
								style={{
									width: "100%",
								}}
								disabledDate={(
									current
								) =>
									current &&
									current >
										dayjs()
								}
							/>
						</Form.Item>
					</div>
					<div className="contatoImpugnacao">
						<Form.Item
							label="Tipo de Solicitação"
							name="tipoSolicitacao"
							className="itemFormularioContato"
							rules={[
								{
									required: true,
									message: "Selecione o tipo de solicitação.",
								},
							]}
						>
							<Select placeholder="Selecione uma opção">
								<Option value="impugnacao">
									Impugnação
									de
									Edital
								</Option>
								<Option value="recurso">
									Recurso
									contra
									resultado
									parcial
								</Option>
								<Option value="outro">
									Outro
									(especificar
									abaixo)
								</Option>
							</Select>
						</Form.Item>

						<Form.Item
							label="Especificação do Tipo (se marcou 'Outro')"
							name="outroTipo"
							className="itemFormularioContato"
						>
							<Input style={{
								width: "20rem",
							}} placeholder="Especificar, se necessário" />
						</Form.Item>
					</div>
					<div className="contatoImpugnacao">
						<Form.Item
							label="Etapa do Processo Seletivo Relacionada"
							name="etapa"
							className="itemFormularioContato"
							rules={[
								{
									required: true,
									message: "Campo obrigatório.",
								},
							]}
						>
							<Select placeholder="Selecione a etapa">
								<Option value="inscricao">
									Inscrição
								</Option>
								<Option value="analise">
									Análise
									curricular
								</Option>
								<Option value="prova">
									Prova
									escrita
								</Option>
								<Option value="entrevista">
									Entrevista
								</Option>
								<Option value="resultado">
									Resultado
									final
								</Option>
								<Option value="etapaOutro">
									Outro
								</Option>
							</Select>
						</Form.Item>

						<Form.Item
							label="Motivo da Impugnação/Recurso"
							name="motivo"
							className="itemFormularioContato"
							rules={[
								{
									required: true,
									message: "Campo obrigatório.",
								},
							]}
						>
							<Input style={{
								width: "20rem",
							}} />
						</Form.Item>
					</div>
					<Form.Item
						label="Descrição Detalhada"
						name="descricao"            
						className="itemFormularioContatoInteiro"
					>
						<TextArea
							rows={4}
							placeholder="Descreva os detalhes da sua solicitação"
						/>
					</Form.Item>
					<div className="contatoImpugnacao">
						<Form.Item
							label="Você já enviou alguma manifestação anterior sobre este processo?"
							name="manifestacaoAnterior"
							className="itemFormularioContato"
						>
							<Radio.Group>
								<Radio value="sim">
									Sim
								</Radio>
								<Radio value="nao">
									Não
								</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item
							label="Se sim, informe o número do protocolo anterior ou data do envio"
							name="protocoloAnterior"
							className="itemFormularioContato"
						>
							<Input style={{
								width: "20rem",
							}} placeholder="Ex: Protocolo 12345 ou 01/01/2025" />
						</Form.Item>
					</div>

					<Form.Item
						label="Anexos"
						name="anexos"
						className="itemFormularioContatoInteiro"
						valuePropName="fileList"
						getValueFromEvent={(e) =>
							Array.isArray(e)
								? e
								: e?.fileList
						}
					>
						<Upload.Dragger
							name="files"
							multiple
							beforeUpload={() =>
								false
							}
						>
							<p className="ant-upload-drag-icon">
								<InboxOutlined />
							</p>
							<p className="ant-upload-text">
								Clique ou
								arraste arquivos
								para anexar
							</p>
						</Upload.Dragger>
					</Form.Item>

					<Form.Item
						label="Deseja receber cópia da solicitação por e-mail?"
						name="copiaEmail"
						className="itemFormularioContatoInteiro"
					>
						<Radio.Group>
							<Radio value="sim">
								Sim
							</Radio>
							<Radio value="nao">
								Não
							</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							block
							style={{ height: 45 , width: 200}}
						>
							Enviar Solicitação
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default FormularioImpugnacao;
