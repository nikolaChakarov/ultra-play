import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import './App.css';

function App() {
	return (
		<AppWrapper>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</AppWrapper>
	);
}

const AppWrapper = styled.div``;

export default App;
