import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const LeagueSortedByType = ({ events }) => {
	console.log(events);

	return (
		<LeagueSortedByTypeWrapper>
			{events.map((ev, idx) => {
				return (
					<Fragment key={idx}>
						<div className='title'>
							<div className='name'>{ev.leagueName}</div>
							<FontAwesomeIcon icon={faCaretUp} />
						</div>
					</Fragment>
				);
			})}
		</LeagueSortedByTypeWrapper>
	);
};

const LeagueSortedByTypeWrapper = styled.div``;

export default LeagueSortedByType;
