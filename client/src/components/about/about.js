import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app-state';
import { styled } from 'styled-components';

const About = () => {
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		return () =>
			dispatch({
				type: 'RESET_SORT_BY',
			});
	}, []);

	return (
		<AoutWrapper>
			<p>
				order by: <span>UltraPlay</span>
			</p>
		</AoutWrapper>
	);
};

const AoutWrapper = styled.div`
	@keyframes pulse {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.5;
		}
	}

	padding: 0.8rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		font-weight: bold;
		font-size: 1.8rem;
		animation: pulse 2s infinite;
	}
`;

export default About;
