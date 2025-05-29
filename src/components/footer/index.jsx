import {
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<p>
				SEaDIP - Superintendência de Educação à
				Distância e Inovações Pedagógicas
			</p>
			<p>
				Praça Santos Andrade, 90 | Centro | CEP:
				80.020-300 | Curitiba - PR
			</p>
			<p>Contato (Teams ou e-mail): seadip@ufpr.br</p>
			<section className="footerRedes">
				<Link to={"https://www.instagram.com/cipead/"}><InstagramOutlined style={{ fontSize: '2rem', color:"#FFF" }}/></Link>
				<Link to={"https://www.youtube.com/channel/UCpdgtJ711ZSg029yKwyjzhA/featured"}><YoutubeOutlined style={{ fontSize: '2rem', color:"#FFF" }}/></Link>
				<Link to={'contato'}><MailOutlined style={{ fontSize: '2rem', color:"#FFF" }}/></Link>
			</section>
		</div>
	);
};
export default Footer;
