import type { PackageWorkerAPI } from "@discretegames/nextjs-ts-webworker-package";
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
		/* Plain `workerAPI.current = new PackageWorkerAPI();` works on localhost when uncommented in realtime,
		 * but not when started uncommented from scratch? Get error: "SyntaxError: Unexpected token 'export'
		 * This error happened while generating the page. Any console logs will be displayed in the terminal window."
		 * The solution used here of only importing the type above and doing a dynamic import below seems to work. */
		(async () => {
			const pkg = await import("@discretegames/nextjs-ts-webworker-package");
			workerAPI.current = new pkg.PackageWorkerAPI();
		})();
		return () => workerAPI.current?.end();
	}, []);

	const callWorker = () => {
		clear();
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
