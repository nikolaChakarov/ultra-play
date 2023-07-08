import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
	const [isAbout, setIsAbout] = useState(false);
	return (
		<HeaderWrapper>
			<div className='header-action'>
				<div className='img-wrapper'>
					<img src={require('../../images/logo.png')} alt='logo' />
				</div>

				{!isAbout && (
					<div className='btn-wrapper'>
						<button>Sort by</button>
					</div>
				)}
			</div>

			<ul className='header-menu'>
				<li className='menu-link'>
					<Link to='/' onClick={() => setIsAbout(false)}>
						Home
					</Link>
				</li>
				<li className='menu-link'>
					<Link to='/about' onClick={() => setIsAbout(true)}>
						About
					</Link>
				</li>
			</ul>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
	@media (max-width: 576px) {
		border: 2px dashed;
		display: flex;
		flex-direction: column-reverse;
		background: var(--app-blue);

		.header-menu {
			display: flex;
			flex-direction: column;

			.menu-link {
				display: flex;
				border-bottom: 1px groove #fff;
				a {
					flex: 1;
					text-align: center;
					padding: 1rem;
					color: #fff;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
				}
			}
		}

		.header-action {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			.img-wrapper {
				max-width: 5rem;
			}

			img {
				filter: invert(100%);
				display: block;
				width: 100%;
			}

			button {
				background: var(--app-green);
				color: #fff;
				font-weight: bold;
				padding: 1rem 1.5rem;
				border-radius: 0.5rem;
				text-transform: uppercase;
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 1.2rem;
			}
		}
	}
`;

export default Header;
