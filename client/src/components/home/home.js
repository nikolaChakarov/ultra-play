import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/app-state';
import { styled } from 'styled-components';
import {
	sortMatchesByTime,
	sortMatchesByLeague,
} from '../../utils/sortMatches';

import League from '../league/league';
import Spinner from '../spinner/spinner';

const Home = () => {
	const { isLoading, eventsList, searchTerm, sortType } =
		useContext(AppContext);

	const [events, setEvents] = useState([]);

	const handleEvents = () => {
		const sorted =
			sortType === 'time'
				? sortMatchesByTime(eventsList)
				: sortMatchesByLeague(eventsList);

		setEvents(sorted);
	};

	const handleSearch = () => {
		const sortAndFilter = sortMatchesByTime(
			eventsList.filter((el) =>
				el.$.Name.toLocaleLowerCase().includes(
					searchTerm.toLocaleLowerCase()
				)
			)
		);

		setEvents((prev) => sortAndFilter);
	};

	useEffect(() => {
		handleSearch();
	}, [searchTerm]);

	useEffect(() => {
		handleEvents();
		console.log('effect');
	}, [sortType, eventsList]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<HomeWrapper className='home-wrapper'>
			<div className='inner'>
				<League events={events} />
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
