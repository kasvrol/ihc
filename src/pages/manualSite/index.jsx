import "./manualSite.css";
import VideoPlayer from "../../components/videoPlayer";
import { BookOutlined, QuestionCircleOutlined } from "@ant-design/icons"; // Adicionei QuestionCircleOutlined para o FAQ
import { Collapse, Typography, Button } from "antd"; // Importações do Ant Design

const { Title } = Typography;
const { Panel } = Collapse;

// Dados de exemplo para o FAQ
const faqData = [
	{
		key: "1",
		question: "Como posso encontrar as últimas notícias ou editais no novo site?",
		answer:
			"As últimas notícias e editais geralmente são destacados na página inicial. Você também pode encontrar uma seção específica de \"Notícias\" ou \"Editais\" no menu principal de navegação para um arquivo completo.",
	},
	{
		key: "2",
		question: "O novo site é compatível com dispositivos móveis (celulares e tablets)?",
		answer:
			"Sim, o novo site foi desenvolvido com um design responsivo, o que significa que ele se adapta automaticamente a diferentes tamanhos de tela, proporcionando uma boa experiência de navegação em computadores, tablets e smartphones.",
	},
	{
		key: "3",
		question: "Encontrei um problema ou tenho uma sugestão. Como posso entrar em contato?",
		answer:
			"Agradecemos seu feedback! Por favor, utilize a seção \"Contato\" do site para nos enviar sua mensagem, ou procure por informações de contato específicas do setor responsável pela sua dúvida ou sugestão.",
	},
];

function ManualSite() {
	return (		
		<div className="containerManualSite">
			<div className = "ManualSite">
				<h2>Sobre o novo site</h2>
				<Button
					type="primary"
					icon={<BookOutlined style={{ fontSize: "7rem" }} />}
					size="large"
					href="https://drive.google.com/file/d/1VlPalW4lbaaO9adfOPa5EsmY5EbmQdMX/view?usp=sharing"
					target="_blank"
					className="divManual"		>
					 
					MANUAL DO SISTEMA
				</Button>
				<div className="videoManual">
					<h3>Confira mais sobre o novo site</h3> 
					<VideoPlayer videoSrc="https://www.youtube.com/embed/6RRLyiEMWCg" /> 
				</div>

				{/* Nova Seção de FAQ */}
				<div className="faqSection">
					<Title level={3} className="faqTitle">
						<QuestionCircleOutlined style={{marginRight: '10px'}} />
						Perguntas Frequentes (FAQ)
					</Title>
					<Collapse accordion className="faqCollapse">
						{faqData.map((item) => (
							<Panel header={item.question} key={item.key}>
								<p>{item.answer}</p>
							</Panel>
						))}
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default ManualSite;