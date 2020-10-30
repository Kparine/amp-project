import testData from "../data/fake-url-data.json";
const testFn = () => {
	console.log("testData ******------>>>>>>", testData);

	return;
};

const TestSearch = () => {
	return (
		<div>
			<form
				class="sample-form"
				method="post"
				action-xhr="https://amp.dev/documentation/examples/api/echo"
				target="_top"
			>
				<input type="search" value="Search Wikipedia..." onChange={testFn()} />
			</form>
		</div>
	);
};

export default TestSearch;
