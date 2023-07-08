import { useState, useContext } from 'react';
import { AppContext } from '../../context/app-state';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
	const [isAbout, setIsAbout] = useState(false);
	const { dispatch } = useContext(AppContext);

	const handleChange = (e) => {
		dispatch({
			type: 'SEARCH_LEAGUE_NAME',
			payload: e.target.value,
		});
	};

	return (
		<HeaderWrapper>
			<div className='header-action'>
				<div className='img-wrapper'>
					<img src={require('../../images/logo.png')} alt='logo' />
				</div>

				{!isAbout && (
					<div className='actions-wrapper'>
						<button>Sort by</button>
						<input
							type='text'
							placeholder='Search by League Name'
							onChange={handleChange}
						/>
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
			background: #fff;

			.img-wrapper {
				max-width: 5rem;
			}

			img {
				filter: brightness(0) saturate(100%) invert(19%) sepia(6%)
					saturate(3972%) hue-rotate(170deg) brightness(98%)
					contrast(95%);
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

			.actions-wrapper {
				display: flex;
				gap: 0.5rem;

				input {
					border: 1px solid #fff;
					border-radius: 0.5rem;
					padding: 0.5rem;
					color: #777;
					box-shadow: inset 1px 1px 4px 0px rgba(0, 0, 0, 0.8);
					font-size: 1.4rem;
				}
			}
		}
	}
`;

export default Header;
