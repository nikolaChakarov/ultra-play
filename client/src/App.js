import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<AppWrapper className='app-wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</AppWrapper>
	);
}

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export default App;
