import { useEffect, useState } from "react";

// Timer needs to be own component so the updates don't re-render everything

const Timer = () => {
	const [startTime, setStartTime] = useState(0);
	const [time, setTime] = useState(0);

	useEffect(() => setStartTime(performance.now()), []);

	useEffect(() => {
		const interval = setInterval(() => setTime(performance.now() - startTime), 10);
		return () => clearInterval(interval);
	}, [startTime]);

	return <p className="text-sm text-neutral-400">responsiveness check - page open for {(time / 1000).toFixed(2)}s</p>;
};

export default Timer;
