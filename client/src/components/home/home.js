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
	const [sortedByTypeNames, setSortedByTypeNames] = useState([]);

	const handleEvents = () => {
		let sorted = [];

		if (sortType === 'time') {
			sorted = sortMatchesByTime(eventsList);
		} else if (sortType === 'league') {
			sorted = sortMatchesByLeague(eventsList);
			setSortedByTypeNames(sorted);
		}
		setEvents(sorted);
	};

	const handleSearch = () => {
		const sortAndFilter =
			sortType === 'time'
				? sortMatchesByTime(
						eventsList.filter((el) =>
							el.$.Name.toLocaleLowerCase().includes(
								searchTerm.toLocaleLowerCase()
							)
						)
				  )
				: sortedByTypeNames.filter((el) =>
						el.leagueName
							.toLocaleLowerCase()
							.includes(searchTerm.toLocaleLowerCase())
				  );
		setEvents(sortAndFilter);
	};

	useEffect(() => {
		handleSearch();
	}, [searchTerm]);

	useEffect(() => {
		handleEvents();
	}, [sortType, eventsList]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<HomeWrapper className='home-wrapper'>
			<League events={events} />
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	position: relative;
	flex: 1;
	overflow-y: scroll;
	scroll-behavior: smooth;
	display: flex;
	flex-direction: column;

	p {
		padding: 5px;
	}
`;

export default Home;
