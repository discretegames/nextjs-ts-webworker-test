// Similar to Vercel example but worker is created in this api file rather than in the React code

/** In workerAPI1 a new worker is spawned every time and terminated once done. Probably a bad way to do it. */
export class WorkerAPI1 {
	private worker: Worker | null = null;

	doWork(n: number): Promise<string> {
		return new Promise((resolve, reject) => {
			this.end();
			console.log("WorkerAPI1 doing work");
			// this.worker = new Worker(new URL("./separateapi.worker", import.meta.url), { type: "module" });
			this.worker = new Worker(new URL("./separateapi.worker", import.meta.url)); // type: module not needed?

			const onMessage = (event: MessageEvent) => {
				console.log("WorkerAPI1 done with " + event.data);
				resolve("API 1: " + event.data);
				this.end();
			};

			// Following 2 lines are equivalent, right? Seems so.
			this.worker.onmessage = onMessage;
			// this.worker.addEventListener("message", onMessage);

			this.worker.postMessage(n);
		});
	}

	end() {
		if (this.worker) console.log("terminating WorkerAPI1");
		this.worker?.terminate();
		this.worker = null;
	}
}

/** In workerAPI2 a persistent worker is used. Meant for use with useRef. Maybe a better way to do it? */
export class WorkerAPI2 {
	private worker: Worker;

	constructor() {
		// this.worker = new Worker(new URL("./separateapi.worker", import.meta.url), { type: "module" });
		this.worker = new Worker(new URL("./separateapi.worker", import.meta.url)); // type: module not needed?
		console.log("WorkerAPI2 constructed");
	}

	doWork(n: number): Promise<string> {
		return new Promise((resolve, reject) => {
			console.log("WorkerAPI2 doing work");

			const onMessage = (event: MessageEvent) => {
				console.log("WorkerAPI2 done with " + event.data);
				resolve("API 2: " + event.data);
			};

			// Following 2 lines are equivalent, right? Seems so.
			this.worker.onmessage = onMessage;
			// this.worker.addEventListener("message", onMessage);

			this.worker.postMessage(n);
		});
	}

	end() {
		console.log("terminating WorkerAPI2");
		this.worker.terminate();
	}
}
