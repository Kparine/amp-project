import Contents from "./contents";
import InfoBox from "./infobox";
const Article = () => {
	return (
		<>
			<div className="article-container">
				<div className="article-content">
					<h1 id="first-heading">Accelerated Mobile Pages</h1>
					<div id="siteSub" className="noprint">
						From Wikipedia, the free encyclopedia
					</div>
					<p className="article-item">
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
						search results in February 2016.
						<sup className="false-link">[9][10]</sup> AMP was initially
						criticized for potentially giving further control over the web to
						Google.
						<sup className="false-link">[11]</sup> The AMP Project announced it
						would move to an open governance model on September 18, 2018.
						<sup className="false-link">[12][13]</sup>
					</p>
					<div className="info-container">
						<InfoBox />
						<Contents />
					</div>
					<h1 className="heading">
						History
						<span className="header-edit">
							{" "}
							[<span className="false-link">edit</span>]
						</span>
					</h1>
					<h2 className="sub-heading">
						Announcement and launch{" "}
						<span className="header-edit">
							{" "}
							[<span className="false-link">edit</span>]
						</span>
					</h2>
					<p className="article-item">
						The AMP Project was announced by Google on October 7, 2015,
						following discussions with its partners in the
						<span className="false-link"> Digital News Initiative</span> (DNI),
						and other news publishers and technology companies around the world,
						about improving the performance of the mobile web. More than 30 news
						publishers and several technology companies (including
						<span className="false-link"> Twitter</span>,
						<span className="false-link"> Pinterest</span>,
						<span className="false-link"> LinkedIn</span> and
						<span className="false-link"> WordPress</span>) were initially
						announced as collaborators in the AMP Project.
						<sup className="false-link">[14][15]</sup> AMP pages first appeared
						to web users in February 2016, when Google began to show the AMP
						versions of webpages in mobile search results. Initially links to
						AMP pages were restricted to a “Top Stories” section of Google's
						mobile search results; by September 2016 Google started linking to
						AMP content in the main mobile search results area.
						<sup className="false-link">[16]</sup> AMP links in Google search
						are identified with an icon. According to one of the co-founders of
						the AMP Project, Malte Ubl, AMP was originally called PCU,
						<sup className="false-link">[17]</sup> which stood for Portable
						Content Unit.
					</p>
					<h2 className="sub-heading">
						Growth and expansion{" "}
						<span className="header-edit">
							{" "}
							[<span className="false-link">edit</span>]
						</span>
					</h2>
					<p className="article-item">
						In September 2016, Microsoft announced support for AMP in the Bing
						apps for iOS and Android. <sup className="false-link">[18]</sup> In
						February 2017, a year after the public launch of AMP, Adobe reported
						AMP pages accounted for 7% of all web traffic for top publishers in
						the United States.<sup className="false-link">[19]</sup> In May
						2017, Google reported 900,000 web domains were publishing AMP pages
						with more than two billion AMP pages published globally.
						<sup className="false-link">[20]</sup> In June 2017, Twitter started
						linking to AMP pages from its iOS and Android apps.
						<sup className="false-link">[21]</sup> In September 2018, Microsoft
						began rolling out its own Bing AMP viewer and AMP cache.
						<sup className="false-link">[22]</sup> On December 7, 2018, AMP
						announced their official WordPress plugin,
						<sup className="false-link">[23]</sup> which allowed WordPress
						websites to include AMP-ready pages. As announced by AMP's tech lead
						Malte at AMP Conf '19, AMP is now just AMP, and does not stand for
						Accelerated Mobile Pages anymore.
						<sup className="false-link">[24]</sup>
					</p>
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
					.article-item {
						font-size: calc(1em * 0.875);
						line-height: 1.6;
					}
					#first-heading {
						margin-bottom: 0.25em;
						padding: 0;
						border-bottom: 1px solid #a2a9b1;
						font-size: 1.8em;
						font-weight: normal;
						overflow: visible;
						line-height: 1.3;
					}
					#siteSub {
						font-size: 92%;
					}
					.heading {
						font-size: 1.5em;
						font-weight: normal;
						border-bottom: 1px solid #a2a9b1;
					}
					.sub-heading {
						font-size: 1.2em;
						font-weight: bold;
					}
					.header-edit {
						font-size: 0.6em;
					}
					.info-container {
						display: flex;
						justify-content: space-between;
						width: 100%;
						flex-direction: row-reverse;
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
