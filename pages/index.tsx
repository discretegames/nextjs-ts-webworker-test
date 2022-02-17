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
			<main className="flex flex-wrap items-center justify-center gap-4 p-4 text-center">
				<h1 className="text-4xl">
					Testing TypeScript WebWorker in NextJS (
					<Link href="https://github.com/discretegames/nextjs-ts-webworker-test">source</Link>) (
					<Link href="https://nextjs-ts-webworker-test.vercel.app/">demo site</Link>)
				</h1>
			</main>
		</div>
	);
};

export default Home;
