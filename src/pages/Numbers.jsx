import React, { useState } from 'react';
import Flipper from '../components/Flipper';

const Numbers = () => {
	const [counter, setCounter] = useState(10);

	const handleClick = () => {
		// console.log('hits');
		setCounter((prev) => prev + 20);
	};

	return (
		<div className='container'>
			<div className='numbers'>
				<div onClick={handleClick} className='clicker'>
					clicker
				</div>
				<Flipper counter={counter} />
			</div>
		</div>
	);
};

export default Numbers;
