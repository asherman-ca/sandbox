import React from 'react';

const SlideButton = ({ children }) => {
	return (
		<div className='button'>
			{children}
			<div className='button-bg'></div>
		</div>
	);
};

export default SlideButton;
