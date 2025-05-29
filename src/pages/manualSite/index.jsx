import "./manualSite.css";
import VideoPlayer from "../../components/videoPlayer";
import { BookOutlined } from "@ant-design/icons";

function ManualSite() {
	return (
		<div className="containerManualSite">
			<div className="ManualSite">
				<h2>Sobre o novo site</h2>
				<div className="divManual">
					<p>MANUAL DO SISTEMA</p>{" "}
					<BookOutlined
						style={{ fontSize: "10rem" }}
						twoToneColor="#fff"
					/>
				</div>
				<div className="videoManual">
				<h3>Confira sobre o novo site</h3>
				<VideoPlayer
						videoSrc="https://www.youtube.com/embed/BYTxPFj44uo"
					/>
				</div>
			</div>
		</div>
	);
}

export default ManualSite;
