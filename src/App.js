import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Containers from './pages/Containers';
import Buttons from './pages/Buttons';
import Nav from './components/Nav';
import Spinners from './pages/Spinners';
import Layouts from './pages/Layouts';
import Headers from './pages/Headers';
import Forms from './pages/Forms';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Containers />} />
				<Route path='/buttons' element={<Buttons />} />
				<Route path='/spinners' element={<Spinners />} />
				<Route path='/layouts' element={<Layouts />} />
				<Route path='/Headers' element={<Headers />} />
				<Route path='/Forms' element={<Forms />} />
			</Routes>
		</Router>
	);
}

export default App;
