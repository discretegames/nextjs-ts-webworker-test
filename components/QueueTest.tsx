import React, { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";

export const QueueTest = () => {
	const [result, setResult] = useState("<result will go here>");
	const clear = () => setResult("<cleared result>");

	const workerRef = useRef<Worker>();
	useEffect(() => {
		workerRef.current = new Worker(new URL("../workers/queuetest.worker", import.meta.url));
		workerRef.current.onmessage = (evt) => {
			console.log("queue test worker result:", evt.data);
			setResult(evt.data);
		};
		return () => workerRef.current?.terminate();
	}, []);

	const handleWork = useCallback(async (s) => {
		console.log("handling JS work with", workerRef.current);
		workerRef.current?.postMessage(s);
	}, []);

	return (
		<Container title={<div>Queue Test Web Worker</div>}>
			<div>
				<p>The number is the synchronous message response time in seconds.</p>
				<button onClick={() => handleWork(1)}>Test 1</button>
				<button onClick={() => handleWork(2)}>Test 2</button>
				<button onClick={() => handleWork(3)}>Test 3</button>
				<button onClick={() => handleWork(4)}>Test 4</button>
				<button onClick={() => handleWork(5)}>Test 5</button>
				<button onClick={clear}>Clear</button>
				<p>{result}</p>
			</div>
		</Container>
	);
};

export default QueueTest;
