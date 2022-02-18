// Tests how calls to workers are queued

const wait = (s: number) => {
	const start = performance.now();
	let i = 0;
	while (performance.now() - start < s * 1000) {
		i++;
	}
	return i;
};

onmessage = (event: MessageEvent) => {
	const s: number = event.data;
	wait(s);
	postMessage("done with " + s);

	// Async things like setTimeout here are not "queued", they send a message back when they finish, possibly
	// overwriting a message that was sent earlier. So I guess keeping the worker synchronous is a good idea.
	// In a more complex setting a cancellation system sounds useful.
	// setTimeout(() => {
	// 	postMessage("done with " + s);
	// }, s * 1000);
};

export {};
