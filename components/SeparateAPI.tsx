import React, { useState } from "react";
import { WorkerAPI1 } from "../workers/separateapi";
import Container from "./Container";

const limit = 1000000000;

export const SeparateAPI = () => {
	const [result, setResult] = useState("<result will go here>");
	const clear = () => setResult("<cleared result>");

	const callWorker = () => {
		const api = new WorkerAPI1();
		api.doWork(limit).then((result) => {
			console.log("got result", result);
			setResult(result);
		});
	};

	return (
		<Container title={<div>Separate API Workers</div>}>
			<div>
				<p>Separated API TS module web worker.</p>
				<button onClick={callWorker}>API 1 (new worker each time)</button>
				<button onClick={clear}>Clear</button>
				<p>{result}</p>
			</div>
		</Container>
	);
};

export default SeparateAPI;
