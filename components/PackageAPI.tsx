import { PackageWorkerAPI } from "@discretegames/nextjs-ts-webworker-package";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";

const limit = 1000000000;

export const PackageAPI = () => {
	const [result, setResult] = useState("<result will go here>");
	const clear = () => setResult("<cleared result>");

	const workerAPI = useRef<PackageWorkerAPI>();

	// Set up worker API on mount
	useEffect(() => {
		workerAPI.current = new PackageWorkerAPI();
		return () => workerAPI.current?.end();
	}, []);

	const callWorker = () => {
		workerAPI.current?.doWork(limit).then((result) => {
			console.log("got result from PackageWorkerAPI", result);
			setResult(result);
		});
	};

	return (
		<Container
			title={
				<Link href="https://www.npmjs.com/package/@discretegames/nextjs-ts-webworker-package">
					NPM Package API Worker
				</Link>
			}
		>
			<div>
				<p>Like API 2 above but from an NPM package</p>
				<button onClick={callWorker}>Test Package Worker</button>
				<button onClick={clear}>Clear</button>
				<p>{result}</p>
			</div>
		</Container>
	);
};

export default PackageAPI;
