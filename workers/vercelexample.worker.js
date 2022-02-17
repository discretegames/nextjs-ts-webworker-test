// This is a module worker, so we can use imports (in the browser too!)
import pi from "../util/pi";

addEventListener("message", (event) => {
	postMessage("js: " + pi(event.data));
});
