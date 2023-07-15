import { useContext } from 'react';
import { styled } from 'styled-components';
import { AppContext } from '../../context/app-state';

import LeagueSortedByTime from './leagueSortedByTime';
import LeagueSortedByType from './leagueSortedByType';

const League = ({ events }) => {
	const { sortType } = useContext(AppContext);

	return (
		<LeagueWrapper>
			{sortType === 'time' ? (
				<LeagueSortedByTime events={events} />
			) : (
				<LeagueSortedByType events={events} />
			)}
		</LeagueWrapper>
	);
};

const LeagueWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export default League;
