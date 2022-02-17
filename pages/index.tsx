import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SeparateAPI from "../components/SeparateAPI";
import Timer from "../components/Timer";
import VercelExample from "../components/VercelExample";
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>nextjs-ts-webworker-test</title>
				<meta name="description" content="NextJS TypeScript WebWorker Testing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center gap-8 p-4 text-center">
				<h1 className="text-4xl">
					Testing TypeScript WebWorker in NextJS (
					<Link href="https://github.com/discretegames/nextjs-ts-webworker-test">source</Link>) (
					<Link href="https://nextjs-ts-webworker-test.vercel.app/">demo site</Link>)
				</h1>
				<Timer />
				<VercelExample />
				<SeparateAPI />
			</main>
		</div>
	);
};

export default Home;
