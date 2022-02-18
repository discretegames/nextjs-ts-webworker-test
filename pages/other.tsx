import Link from "next/link";
import React from "react";

export const Other = () => {
	return (
		<div className="flex flex-col gap-8 p-8 text-center text-xl">
			<p>Some other page, just used to check that workers get terminated.</p>
			<Link href="/">Home</Link>
		</div>
	);
};

export default Other;
