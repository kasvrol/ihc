import { Outlet } from "react-router-dom";
import HeaderDesktop from "../headerDesktop"
import HeaderMobile from "../headerMobile"
import Footer from "../footer";
import { useIsMobile } from "../../hooks/useIsMobile"
import "./layout.css"

function Layout() {
  const isMobile = useIsMobile();
	return (
    <div className="layout">
      {isMobile? <HeaderMobile /> : <HeaderDesktop />}
			<main className="main">
				<Outlet />{" "}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
