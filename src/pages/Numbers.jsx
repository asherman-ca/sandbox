import React, { useState } from 'react';
import Flipper from '../components/Flipper';

const Numbers = () => {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter((prev) => prev + 50);
	};

	const handleDec = () => {
		setCounter((prev) => prev - 50);
	};

	return (
		<div className='container'>
			<div className='numbers'>
				<div>
					<button onClick={handleClick} className='clicker'>
						Increment
					</button>
					<button onClick={handleDec} className='clicker'>
						Decrement
					</button>
				</div>
				<Flipper counter={counter} />
			</div>
		</div>
	);
};

export default Numbers;
