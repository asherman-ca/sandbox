import SlideButton from '../components/SlideButton';

const Buttons = () => {
	return (
		<div className='container'>
			<div className='buttons'>
				<div className='section'>
					<SlideButton>Button Text</SlideButton>
					<div className='clipper-container'>
						<div className='thing'>thing</div>
						<div className='clipper'>
							clipperclappper
							{/* <div>clipper clappper</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
