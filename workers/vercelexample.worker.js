// This is a module worker, so we can use imports (in the browser too!)
import pi from "../util/pi";

addEventListener("message", (event) => {
	postMessage("js: " + pi(event.data));
});

// The confusing part is both this and the ts counterpart run fine in Firefox and Firefox for Android, but they
// aren't supposed to -- no "Support for ECMAScript modules" https://developer.mozilla.org/en-US/docs/Web/API/Worker
