import { useAmp } from "next/amp";
import Home from "../components/home";
import Header from "../components/header";
import Article from "../components/article";
import SideNavBar from "../components/navbar";

export const config = {
	amp: true,
};

const Index = () => {
	const isAmp = useAmp();
	return (
		<div className="amp-project-main-container">
			<SideNavBar />
			<div>
				<Header />
				<Article />
			</div>
			<style global jsx>
				{`
					body {
						min-width: 100%;
						min-height: 100vh;
						background-color: #f8f9fa;
					}
					.amp-project-main-container {
						display: flex;
					}
					.article-main {
						width: 100%;
						min-height: 100vh;
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
					.false-link:visited {
						color: #0b0080;
					}
				`}
			</style>
		</div>
	);
};
export default Index;
