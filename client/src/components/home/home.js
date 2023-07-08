import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/app-state';
import { styled } from 'styled-components';

import Spinner from '../spinner/spinner';

const Home = () => {
	const { isLoading, eventsList } = useContext(AppContext);

	const [events, setEvents] = useState(eventsList);

	console.log('eventlist::', eventsList);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<HomeWrapper>
			<div className='inner'>
				{events.map((ev, idx) => (
					<p key={idx}>{ev.$.Name}</p>
				))}
			</div>
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	position: relative;
	flex: 1;
	overflow: scroll;
	display: flex;
	flex-direction: column;

	.inner {
		border: 2px dashed red;
		overflow: scroll;
		scroll-behavior: smooth;
	}

	p {
		padding: 5px;
		border: dashed 1px green;
	}
`;

export default Home;
