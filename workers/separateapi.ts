// Similar to Vercel example but worker is created in this api file rather than in the React code

/** In workerAPI1 a new worker is spawned every time work is done, and terminated once done. Bad way to do it. */
export class WorkerAPI1 {
	private worker: Worker | null = null;

	doWork(n: number): Promise<string> {
		return new Promise((resolve, reject) => {
			this.terminate();
			console.log("WorkerAPI1 doing work");
			// this.worker = new Worker(new URL("./separateapi.worker", import.meta.url), { type: "module" });
			this.worker = new Worker(new URL("./separateapi.worker", import.meta.url)); // type: module not needed?

			const onMessage = (event: MessageEvent) => {
				console.log("WorkerAPI1 done with " + event.data);
				resolve(event.data);
				this.terminate();
			};
			// Following 2 lines are equivalent, right? Seems so.
			this.worker.onmessage = onMessage;
			// this.worker.addEventListener("message", onMessage);
			this.worker.postMessage(n);
		});
	}

	terminate() {
		if (this.worker) console.log("terminated WorkerAPI1");
		this.worker?.terminate();
		this.worker = null;
	}
}
