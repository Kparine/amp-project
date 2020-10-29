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
			<SideNavBar />
			<Home />
			<ContentAnchors />
			<style global jsx>
				{`
					body {
						min-width: 100%;
						min-height: 100vh;
						background-color: #f8f9fa;
					}
					.false-link {
						color: #155af0;
						font-weight: 300;
					}
					.false-link:hover {
						font-weight: bold;
						text-decoration: underline;
					}
				`}
			</style>
		</div>
	);
};
export default Index;
