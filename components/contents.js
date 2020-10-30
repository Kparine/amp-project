const Contents = () => {
	return (
		<>
			<div className="article-anchor-container">
				<div className="article-anchor-content">
					<div className="content-label" id="target">
						Contents [
						<a className="false-link" id="off" href="#">
							show
						</a>
						<a className="false-link" id="on" href="#target">
							hide
						</a>
						]
					</div>
					<div className="control-me">
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
									<span className="bullet">3.4</span> Parity with canonical
									pages
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
									<span className="bullet">4.2</span> Comparison to other
									formats
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
			</div>
			<style jsx>
				{`
				.article-anchor-container {
					border: 1px solid #a2a9b1;
					background-color: #F8F9FA;
					padding: 5px;
					font-size: 95%;
					width: 300px;
				}

				#off {
				display: none;
				}

				.control-me {
					display: block;
					visibility: visible;
					opacity: 1;
					animation: fade 1s;
					opacity: 1;
				}

				#target:target ~ .control-me {
					position: absolute;
					list-style: none;
					display: none;
					opacity: 0;
					visibility: hidden;
					padding: 10px;
					background-color: rgba(92, 91, 87, 0.9);
					-webkit-transition: opacity 600ms, visibility 600ms;
					transition: opacity 600ms, visibility 600ms;
				}

				#target:target #on {
					display: none;
				}

				#target:target #off {
					display: block;
					visibility: visible;
					opacity: 1;
				}

				@keyframes fade {
					0% {opacity: 0;}
					100% {opacity: 1;}
				}

				.content-label {
					display: flex;
					justify-content: center;
					font-weight: bolder;
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

export default Contents;
