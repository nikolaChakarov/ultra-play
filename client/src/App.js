import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<AppWrapper>
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
	border: 2px dashed;
	height: 100vh;
`;

export default App;
