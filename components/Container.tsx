const Container = ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-4 rounded border border-neutral-500 bg-neutral-700 p-4">
			<h2 className="text-2xl font-bold">{title}</h2>
			{children}
		</div>
	);
};

export default Container;
