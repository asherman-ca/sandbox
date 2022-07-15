import React, { useEffect, useState } from 'react';

const Flipper = ({ counter }) => {
	const [displayNum, setDisplayNum] = useState(counter);
	const [updatedNum, setUpdatedNum] = useState(counter);

	console.log('counter', counter);

	useEffect(() => {
		setUpdatedNum(counter);
	}, [counter]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (updatedNum > displayNum) {
				setDisplayNum((prev) => prev + 1);
			}
		}, 25);
		return () => clearTimeout(timer);
	}, [updatedNum, displayNum]);

	console.log('displayNum', displayNum);

	return <div>{displayNum}</div>;
};

export default Flipper;
