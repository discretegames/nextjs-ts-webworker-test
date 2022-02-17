import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>nextjs-ts-webworker-test</title>
				<meta name="description" content="NextJS TypeScript WebWorker Testing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="p-4 flex flex-wrap justify-center">
				<h1 className="text-4xl">
					Welcome to{" "}
					<Link href="https://github.com/discretegames/nextjs-ts-webworker-test">
						nextjs-ts-webworker-test
					</Link>
				</h1>
			</main>
		</div>
	);
};

export default Home;
