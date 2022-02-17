import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US" className="m-0 p-0">
				<Head />
				<body className="bg-neutral-800 text-white m-0 p-0 font-sans">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
