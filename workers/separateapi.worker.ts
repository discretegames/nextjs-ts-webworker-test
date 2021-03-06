import { testZip } from "../util/lodasher";
import pi from "../util/pi";

const doesWork = (data: number) => {
	console.log("Separate API doing work");
	return pi(data) + " and " + JSON.stringify(testZip());
};

const caller = (event: MessageEvent) => {
	postMessage(doesWork(event.data));
};

// Following 2 lines are equivalent, right? Seems so.
onmessage = caller;
// addEventListener("message", caller);
