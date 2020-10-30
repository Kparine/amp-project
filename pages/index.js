import { useAmp } from "next/amp";
import Home from "../components/home";
import Header from "../components/header";
import ContentAnchors from "../components/contents";
import SideNavBar from "../components/navbar";

export const config = {
	amp: true,
};

const Index = () => {
	const isAmp = useAmp();
	return (
		<div>
			<Header />
			<div className="layout-main">
				<div className="sidebar-main">
					<SideNavBar />
				</div>
				<div className="article-main">
					<ContentAnchors />
				</div>
			</div>
			<style global jsx>
				{`
					body {
						min-width: 100%;
						min-height: 100vh;
						background-color: #f8f9fa;
					}
					.layout-main {
						display: flex;
					}
					.false-link {
						color: #194eb1;
						font-weight: 300;
					}
					.false-link:hover {
						text-decoration: underline;
						cursor: pointer;
					}
				`}
			</style>
		</div>
	);
};
export default Index;
