import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
	return (
		<HeaderWrapper>
			<ul className='menu'>
				<li className='menu-link'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header``;

export default Header;
