import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { WorkerAPI1, WorkerAPI2 } from "../workers/separateapi";
import Container from "./Container";

const limit = 1000000000;

export const SeparateAPI = () => {
	const [result, setResult] = useState("<result will go here>");
	const clear = () => setResult("<cleared result>");

	const callWorker1 = () => {
		clear();
		const api = new WorkerAPI1();
		api.doWork(limit).then((result) => {
			console.log("got result from API 1", result);
			setResult(result);
		});
	};

	const workerAPI2Ref = useRef<WorkerAPI2>();

	// Set up worker API 2 on mount
	useEffect(() => {
		workerAPI2Ref.current = new WorkerAPI2();
		return () => workerAPI2Ref.current?.end();
	}, []);

	const callWorker2 = () => {
		clear();
		workerAPI2Ref.current?.doWork(limit).then((result) => {
			console.log("got result from API 2", result);
			setResult(result);
		});
	};

	return (
		<Container
			title={
				<Link href="https://github.com/discretegames/nextjs-ts-webworker-test/blob/main/workers/separateapi.ts">
					Separate API Workers
				</Link>
			}
		>
			<div>
				<p>Separated API TS module web worker.</p>
				<button onClick={callWorker1}>API 1 (new worker each time)</button>
				<button onClick={callWorker2}>API 2 (persistent worker)</button>
				<button onClick={clear}>Clear</button>
				<p>{result}</p>
			</div>
		</Container>
	);
};

export default SeparateAPI;
