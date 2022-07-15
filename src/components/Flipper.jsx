import React, { useEffect, useState } from 'react';

const Flipper = ({ counter, updated }) => {
	const [displayNum, setDisplayNum] = useState(counter);
	const [updatedNum, setUpdatedNum] = useState(counter);

	console.log('counter', counter);

	// useEffect(() => {
	// 	if (displayNum !== counter) {
	// 		for (let i = displayNum + 1; i++; i <= counter) {
	// 			setDisplayNum(i);
	// 		}
	// 	}
	// }, [counter]);

	useEffect(() => {
		// let startNum = displayNum;
		// console.log('start', startNum);

		// const timeSet = async (i) => {
		// 	setTimeout(5000).then(setDisplayNum(i));
		// };
		// for (let i = startNum; i <= counter; i++) {
		// 	console.log(i);
		// 	timeSet(i);
		// }
		// let i = startNum;
		// while (i <= counter) {
		// 	console.log(i);
		// 	// setDisplayNum(i);
		// 	setTimeout(() => setDisplayNum(i), 1000);
		// 	i += 1;
		// }

		setUpdatedNum(counter);
	}, [counter]);

	useEffect(() => {
		// let startNum = displayNum;
		if (updatedNum > displayNum) {
			setTimeout(
				setDisplayNum((prev) => prev + 1),
				1000
			);
		}
	}, [updatedNum, counter, displayNum]);

	console.log('displayNum', displayNum);

	// useEffect(() => {
	// 	setPrevNum(displayNum);
	// }, [displayNum]);

	return <div>{displayNum}</div>;
};

export default Flipper;
