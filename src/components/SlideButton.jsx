import React from 'react';

const SlideButton = ({ children }) => {
	return (
		<div className='button'>
			{children}
			<div className='button-bg'>
				{/* <div className='button-text'>{children}</div> */}
				<div>{children}</div>
			</div>
		</div>
	);
};

export default SlideButton;
