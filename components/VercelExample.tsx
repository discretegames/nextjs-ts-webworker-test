import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";

const limit = 1000000000;

export const VercelExample = () => {
	const [result, setResult] = useState("<result will go here>");
	const clear = () => setResult("<cleared result>");

	const workerRefJS = useRef<Worker>();
	useEffect(() => {
		workerRefJS.current = new Worker(new URL("../workers/vercelexample.worker", import.meta.url));
		workerRefJS.current.onmessage = (evt) => {
			console.log("worker result:", evt.data);
			setResult(evt.data);
		};
		return () => workerRefJS.current?.terminate();
	}, []);

	const workerRefTS = useRef<Worker>();
	useEffect(() => {
		workerRefTS.current = new Worker(new URL("../workers/vercelexamplets.worker", import.meta.url));
		workerRefTS.current.onmessage = (evt) => {
			console.log("worker result:", evt.data);
			setResult(evt.data);
		};
		return () => workerRefJS.current?.terminate();
	}, []);

	const handleWorkJS = useCallback(async () => {
		clear();
		console.log("handling JS work with", workerRefJS.current);
		workerRefJS.current?.postMessage(limit);
	}, []);

	const handleWorkTS = useCallback(async () => {
		clear();
		console.log("handling TS work with", workerRefTS.current);
		workerRefTS.current?.postMessage(limit);
	}, []);

	return (
		<Container
			title={
				<div>
					WebWorkers Based on{" "}
					<Link href="https://github.com/vercel/next.js/tree/canary/examples/with-web-worker">
						Vercel Example
					</Link>
				</div>
			}
		>
			<div>
				<p>Module web worker in JS and TS. Calculates pi.</p>
				<button onClick={handleWorkJS}>Calculate PI (JS Worker)</button>
				<button onClick={handleWorkTS}>Calculate PI (TS Worker)</button>
				<button onClick={clear}>Clear</button>
				<p>{result}</p>
			</div>
		</Container>
	);
};

export default VercelExample;
