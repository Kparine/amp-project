import TestSearch from "./testSearch";
const sampleAutoData = {
	items: [
		{
			city: "Albany",
			state: "New York",
			areaCode: 518,
			population: 98251,
		},
		{
			city: "Annapolis",
			state: "Maryland",
			areaCode: 410,
			population: 39321,
		},
		{
			city: "Trenton",
			state: "New Jersey",
			areaCode: 609,
			population: 84964,
		},
	],
};
const Header = () => {
	console.log("sampleAutoData ******------>>>>>>", sampleAutoData);

	return (
		<>
			<div className="header-container">
				<div className="header-content">
					<div className="header-top">
						<div className="txt">Not logged in</div>
						<div className="txt false-link">Talk</div>
						<div className="txt false-link">Contributions</div>
						<div className="txt false-link">Create account</div>
						<div className="txt false-link">Log in</div>
					</div>
					<div className="header-btm">
						<div className="header-btm-1">
							<div className="txt false-link article-tab-active">Article</div>
							<div className="txt false-link article-tab-inactive">
								<div className="sub-article-tab-inactive">Talk</div>
							</div>
						</div>
						<div className="header-btm-2">
							<div className="txt false-link article-tab-active">Read</div>
							<div className="txt false-link article-tab-inactive">
								<div className="sub-article-tab-inactive">Edit</div>
							</div>
							<div className="txt false-link article-tab-inactive">
								<div className="sub-article-tab-inactive">View History</div>
							</div>
							<TestSearch />
						</div>
					</div>
				</div>
			</div>
			<style amp-custom jsx>{`
				.header-container {
					display: flex;
					flex-direction: row-reverse;
					min-height: 80px;
				}
				.header-content {
					display: flex;
					flex-direction: column;
					width: 100%;
					font-size: 12px;
					min-height: 80px;
					padding-right: 20px;
				}
				.header-top {
					display: flex;
					justify-content: flex-end;
				}
				.header-btm {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding-top: 30px;
				}
				.header-btm-1 {
					display: flex;
				}
				.header-btm-2 {
					display: flex;
				}
				.txt {
					padding: 5px;
				}
				.article-tab-active {
					border-right: 1px solid #a7d7f9;
					border-left: 1px solid #a7d7f9;
					border-bottom: 1px solid white;
					background-color: white;
					padding-top: 6px;
				}
				.sub-article-tab-inactive {
					padding-top: 7px;
				}
				.article-tab-inactive {
					background-image: linear-gradient(
						to top,
						#77c1f6 0,
						#e8f2f8 1px,
						#ffffff 100%
					);
					background-position: left bottom;
					background-repeat: repeat-x;
					border-right: 1px solid #a7d7f9;
					border-left: 1px solid #a7d7f9;
					display: block;
					height: 100%;
					margin: 0px;
					padding: 0px 10px 0px 10px;
					line-height: 1.125em;
					white-space: nowrap;
				}
				.form {
					padding-left: 10px;
				}
			`}</style>
		</>
	);
};

export default Header;
