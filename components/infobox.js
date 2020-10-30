const InfoBox = () => {
	return (
		<>
			<div className="article-anchor-container">
				<div className="content-label">Accelerated Mobile Pages</div>
				<div className="article-anchor-content">
					<table>
						<tbody>
							<a className="info-content-item false-link group-head">
								<span className="bullet">Created By</span>
								<span> Google</span>
							</a>
							<div className=" info-content-item false-link">
								<span className="bullet">URL</span> amp.dev
							</div>
							<div className="info-content-item false-link">
								<span className="bullet">Launched</span> October 7, 2015; 5
								years ago
							</div>
						</tbody>
					</table>
				</div>
			</div>

			<style jsx>
				{`
				.article-anchor-container {
					border: 1px solid #a2a9b1;
					border-spacing: 3px;
					background-color: #f8f9fa;
					color: black;
					padding: 0.2em;
					float: right;
					clear: right;
					font-size: 88%;
					line-height: 1.5em;
					height: 90px;

				}
				.article-anchor-content {
					padding: 5px;
					font-size: 95%;
				}
				.content-label {
					display: flex;
					justify-content: center;
					font-weight: bolder;
				}
				tbody {
					isplay: table-row-group;
					vertical-align: middle;
					border-color: inherit;
				}
				tr {
					display: table-row;
					vertical-align: inherit;
					border-color: inherit;
				}
				.bullet {
					color: #000;
				}
				.article-anchor-content{
					font-size 95%;
				}
				`}
			</style>
		</>
	);
};

export default InfoBox;
