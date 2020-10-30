const Footer = () => {
	return (
		<>
			<div className="footer-container">
				<div className="footer-content">
					<div className="txt-item">
						This page was last edited on 26 September 2020, at 19:02 (UTC).
					</div>
					<div className="txt-item">
						Text is available under the Creative Commons Attribution-ShareAlike
						License; additional terms may apply. By using this site, you agree
						to the Terms of Use and Privacy Policy. Wikipedia® is a registered
						trademark of the Wikimedia Foundation, Inc., a non-profit
						organization.
					</div>
					<div className="links-container">
						<div>
							<span className="link-item false-link"> Privacy policy</span>
							<span className="link-item false-link"> About Wikipedia</span>
							<span className="link-item false-link"> Disclaimers</span>
							<span className="link-item false-link"> Contact Wikipedia</span>
							<span className="link-item false-link"> Mobile view</span>
							<span className="link-item false-link"> Developers</span>
							<span className="link-item false-link"> Statistics</span>
							<span className="link-item false-link"> Cookie statement</span>
						</div>
						<div className="img-container link-item">
							<amp-img
								alt="A view of the sea"
								src="https://commons.wikimedia.org/static/images/footer/wikimedia-button.png"
								width="30px"
								height="8px"
								layout="responsive"
							></amp-img>
						</div>
						<div className="img-container link-item">
							<amp-img
								alt="A view of the sea"
								src="https://commons.wikimedia.org/static/images/footer/poweredby_mediawiki_88x31.png"
								width="30px"
								height="8px"
								layout="responsive"
							></amp-img>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.links-container {
					display: flex;
					margin: 5px;
				}
				.img-container {
					height: 40px;
					width: 95px;
				}

				.link-item {
					padding-right: 5px;
				}

				.txt-item {
					color: #202122;
					margin: 0;
					padding: 0.5em 0;
					font-size: 0.75em;
				}
			`}</style>
		</>
	);
};

export default Footer;
