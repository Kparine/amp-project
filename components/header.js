const Header = () => {
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
						<div className="txt false-link">Article</div>
						<div className="txt false-link">Talk</div>
						<div className="txt false-link">Read</div>
						<div className="txt false-link">Edit</div>
						<div className="txt false-link">View History</div>
						<input type="search"></input>
					</div>
				</div>
			</div>
			<style jsx>{`
				.header-container {
					display: flex;
					flex-direction: row-reverse;
				}
				.header-content {
					display: flex;
					flex-direction: column;
					font-size: 12px;
				}
				.header-top {
					display: flex;
					flex-direction: row;
				}
				.header-btm {
					display: flex;
					flex-direction: row;
				}

				.txt {
					padding: 5px;
				}
			`}</style>
		</>
	);
};

export default Header;
