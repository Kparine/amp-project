import Contents from "./contents";
const Article = () => {
	return (
		<>
			<div className="article-container">
				<div className="article-content">
					<h1 id="first-heading">Accelerated Mobile Pages</h1>
					<p>
						<span className="bolden">AMP</span> (originally an acronym for
						<span className="bolden"> Accelerated Mobile Pages</span>
						<sup className="false-link">[1]</sup>) is an open source HTML
						framework developed by the AMP Open Source Project.
						<sup className="false-link">[2]</sup> It was originally created by
						Google as a competitor to Facebook Instant Articles and Apple News.
						<sup className="false-link">[3]</sup> AMP is optimized for mobile
						web browsing and intended to help webpages load faster.
						<sup className="false-link">[4]</sup> AMP pages may be cached by a
						CDN, such as Microsoft Bing or Cloudflare's AMP caches, which allows
						pages to be served more quickly.
						<sup className="false-link">[5][6][7]</sup> AMP was first announced
						on October 7, 2015.<sup className="false-link">[8]</sup> After a
						technical preview period, AMP pages began appearing in Google mobile
						search results in February 2016.[9][10] AMP was initially criticized
						for potentially giving further control over the web to Google.
						<sup className="false-link">[11]</sup> The AMP Project announced it
						would move to an open governance model on September 18, 2018.
						<sup className="false-link">[12][13]</sup>
					</p>
					<Contents />
				</div>
			</div>
			<style jsx>
				{`
					.article-container {
						background-color: white;
						min-width: 100%;
						min-height: 100vh;
						margin-top: -1px;
						border: 1px solid #a7d7f9;
						border-right-width: 0;
					}
					.article-content {
						margin: 25px;
					}
					#first-heading {
						margin-bottom: 0.25em;
						padding: 0;
						border-bottom: 1px solid #a2a9b1;
						font-family: "Linux Libertine", "Georgia", "Times", serif;
						font-size: 1.8em;
						font-weight: normal;
						overflow: visible;
						line-height: 1.3;
					}
					.bolden {
						font-weight: bolder;
					}
				`}
			</style>
		</>
	);
};

export default Article;
