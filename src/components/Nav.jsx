import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<div className='nav-container'>
				<div>Swatchbook</div>
				<div className='links'>
					<Link to={'/'}>
						<div>Containers</div>
					</Link>
					<Link to={'/buttons'}>
						<div>Buttons</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
