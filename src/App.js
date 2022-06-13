import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Containers from './pages/Containers';
import Buttons from './pages/Buttons';
import Nav from './components/Nav';
import Spinners from './pages/Spinners';
import Layouts from './pages/Layouts';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Containers />} />
				<Route path='/buttons' element={<Buttons />} />
				<Route path='/spinners' element={<Spinners />} />
				<Route path='/layouts' element={<Layouts />} />
			</Routes>
		</Router>
	);
}

export default App;
