import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Containers from './pages/Containers';
import Buttons from './pages/Buttons';
import Nav from './components/Nav';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Containers />} />
				<Route path='/buttons' element={<Buttons />} />
			</Routes>
		</Router>
	);
}

export default App;
