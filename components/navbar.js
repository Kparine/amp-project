const SideNavBar = () => {
	return (
		<>
			<div className="sidebar-container">
				<amp-img
					alt="A view of the sea"
					src="https://upload.wikimedia.org/wikipedia/commons/7/77/Wikipedia_svg_logo.svg"
					width="100px"
					height="100px"
					layout="responsive"
				></amp-img>
			</div>
			<style jsx>{`
				.sidebar-container {
					height: 100px;
					width: 100px;
				}
			`}</style>
		</>
	);
};

export default SideNavBar;
