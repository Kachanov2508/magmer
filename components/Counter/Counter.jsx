import { useEffect, useState } from "react";

const Counter = ({ time }) => {
	const [count, setCount] = useState(time);

	useEffect(() => {
		if (count > 0) {
			const interval = setInterval(() => {
				setCount(count - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [count]);

	return count;
};

export default Counter;
