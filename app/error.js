'use client';

const Error = ({ error, reset }) => {
	return (
		<main className="bg-amber-200 min-h-screen flex flex-col justify-center items-center gap-10">
			<div className="font-bold border p-3">{error.message}</div>
			<button onClick={() => reset()} className="bg-red-500 p-3 px-5 rounded-full text-background"> Try Again</button>
		</main>
	);
};

export default Error;
