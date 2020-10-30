const SideNavBar = () => {
	return (
		<>
			<div className="sidebar-container">
				<a href="https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages">
					<amp-img
						alt="A view of the sea"
						src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Wikipedia-logo-v2-en.svg"
						width="100px"
						height="160px"
						layout="responsive"
					></amp-img>
				</a>
				<div className="menu-portal">
					<div className="interaction-sub-label false-link">Main page</div>
					<div className="interaction-sub-label false-link">Contents</div>
					<div className="interaction-sub-label false-link">Current events</div>
					<div className="interaction-sub-label false-link">Random article</div>
					<div className="interaction-sub-label false-link">
						About Wikipedia
					</div>
					<div className="interaction-sub-label false-link">Contact us</div>
					<div className="interaction-sub-label false-link">Donate</div>
				</div>
				<div className="menu-portal">
					<h3 className="interaction-label">Contribute</h3>
					<div className="interaction-sub-label false-link">Help</div>
					<div className="interaction-sub-label false-link">Learn to edit</div>
					<div className="interaction-sub-label false-link">
						Community portal
					</div>
					<div className="interaction-sub-label false-link">Recent changes</div>
					<div className="interaction-sub-label false-link">Upload file</div>
				</div>
				<div className="menu-portal">
					<h3 className="interaction-label">Tools</h3>
					<div className="interaction-sub-label false-link">
						What links here
					</div>
					<div className="interaction-sub-label false-link">
						Related changes
					</div>
					<div className="interaction-sub-label false-link">Special pages</div>
					<div className="interaction-sub-label false-link">Permanent link</div>
					<div className="interaction-sub-label false-link">
						Page information
					</div>
					<div className="interaction-sub-label false-link">Cite this page</div>
					<div className="interaction-sub-label false-link">Wikidata item</div>
				</div>
				<div className="menu-portal">
					<h3 className="interaction-label">Print/export</h3>
					<div className="interaction-sub-label false-link">
						Download as PDF
					</div>
					<div className="interaction-sub-label false-link">
						Printable version
					</div>
				</div>
				<div className="menu-portal">
					<h3 className="interaction-label">Languages</h3>
					<div className="interaction-sub-label false-link">العربية</div>
					<div className="interaction-sub-label false-link">Deutsch</div>
					<div className="interaction-sub-label false-link">Español</div>
					<div className="interaction-sub-label false-link">Français</div>
					<div className="interaction-sub-label false-link">
						Bahasa Indonesia
					</div>
					<div className="interaction-sub-label false-link">日本語</div>
					<div className="interaction-sub-label false-link">Português</div>
					<div className="interaction-sub-label false-link">Русский</div>
				</div>
			</div>
			<style jsx>{`
				.sidebar-container {
					height: 500px;
					width: 100px;
				}
				.vector-portal {
					margin: 0 0.6em 0 0.7em;
					padding: 0.25em 0;
					direction: ltr;
				}
				.interaction-label {
					display: block;
					background-image: url(/w/skins/Vector/resources/skins.vector.styles/images/portal-separator.png?4ab04);
					background-image: linear-gradient(
						to right,
						rgba(200, 204, 209, 0) 0,
						#c8ccd1 33%,
						#c8ccd1 66%,
						rgba(200, 204, 209, 0) 100%
					);
					background-position: center bottom;
					background-repeat: no-repeat;
					background-size: 100% 1px;
					color: #54595d;
					margin: 0.5em 0 0 0.66666667em;
					border: 0;
					padding: 0.25em 0;
					font-size: 0.75em;
					font-weight: normal;
					cursor: default;
				}
				.interaction-sub-label {
					margin: 0;
					padding: 0.25em 0;
					font-size: 0.75em;
					line-height: 1.125em;
				}
			`}</style>
		</>
	);
};

export default SideNavBar;
