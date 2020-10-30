const ContentAnchors = () => {
	return (
		<>
			<div className="article-anchor-container">
				<div className="article-anchor-content">
					<div>
						Contents [<span className="false-link">hide</span>]
					</div>
					<div>
						<a className="list-header false-link group-head">
							<span className="bullet">1</span>
							<span> History</span>
						</a>
						<div className="lvl-2">
							<div className="false-link">
								<span className="bullet">1.1</span> Annoucnment and launch
							</div>
							<div className="false-link">
								<span className="bullet">1.2</span> Growth and expansion
							</div>
						</div>
					</div>

					<div>
						<a className="list-header false-link group-head">
							<div className="list-header false-link group-head">
								<span className="bullet">2</span>
								<span> AMP Framework</span>
							</div>
						</a>
						<div className="lvl-2">
							<div className="false-link">
								<span className="bullet">2.1</span> AMP HTML
							</div>
							<div className="false-link">
								<span className="bullet">2.2</span> Web Stories
							</div>
							<div className="false-link">
								<span className="bullet">2.3</span> Web Stories Editors and
								Builders
							</div>
							<div className="false-link">
								<span className="bullet">2.4</span> AMP Email
							</div>
						</div>
					</div>

					<div>
						<a className="list-header false-link group-head">
							<div className="list-header false-link group-head">
								<span className="bullet">3</span>
								<span> Technology</span>
							</div>
						</a>
						<div className="lvl-2">
							<div className="false-link">
								<span className="bullet">3.1</span> Online format
							</div>
							<div className="false-link">
								<span className="bullet">3.2</span> Third-party integration
							</div>
							<div className="false-link">
								<span className="bullet">3.3</span> Performance
							</div>
							<div className="false-link">
								<span className="bullet">3.4</span> Parity with canonical pages
							</div>
						</div>
					</div>

					<div>
						<a className="list-header false-link group-head">
							<div className="list-header false-link group-head">
								<span className="bullet">4</span>
								<span> Reception</span>
							</div>
						</a>
						<div className="lvl-2">
							<div className="false-link">
								<span className="bullet">4.1</span> General criticism
							</div>
							<div className="false-link">
								<span className="bullet">4.2</span> Comparison to other formats
							</div>
							<div className="false-link">
								<span className="bullet">4.3</span> Google control
							</div>
							<div className="false-link">
								<span className="bullet">4.4</span> Problems on pre-rendering
							</div>
							<div className="false-link">
								<span className="bullet">4.5</span> Monetization
							</div>
							<div className="false-link">
								<span className="bullet">4.6</span> Exploitation for malicious
								purposes
							</div>
						</div>
					</div>

					<div className="list-header false-link">
						<span className="bullet">5</span> References
					</div>
					<div className="list-header false-link">
						<span className="bullet">6</span> External links
					</div>
				</div>
			</div>
			<style global jsx>
				{`
				.article-anchor-container {
					border: 1px solid #a2a9b1;
					background-color: #F8F9FA;
					padding: 5px;
					font-size: 95%;
				}
					.lvl-2 {
						margin: 0 0 0 2em;
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

export default ContentAnchors;
