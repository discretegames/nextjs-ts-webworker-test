import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US" className="m-0 p-0">
				<Head />
				<body className="m-0 bg-neutral-800 p-0 font-sans text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
