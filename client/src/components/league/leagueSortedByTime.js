import { Fragment } from 'react';
import { styled } from 'styled-components';
import Match from '../match/match';

const LeagueSortedByTime = ({ events }) => {
	return (
		<LeagueSortedByTimeWrapper>
			{events.map((ev, idx) => {
				return (
					<Fragment key={idx}>
						<div className='title'>
							<span className='league-name'>{ev.leagueName}</span>
							<div className='odds'>
								<span>1</span>
								<span>x</span>
								<span>2</span>
							</div>
						</div>

						<div className='matches'>
							{ev?.matches?.map((match, i) => (
								<Match key={i} match={match} />
							))}
						</div>
					</Fragment>
				);
			})}
		</LeagueSortedByTimeWrapper>
	);
};

const LeagueSortedByTimeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 2px groove #fff;

	.title {
		background: #dedede;
		display: flex;
		border-bottom: 2px groove #fff;

		/* border: 2px dashed red; */

		.league-name {
			padding: 0.8rem;
			flex: 3;
			/* border: 2px dashed lightsalmon; */
		}

		.odds {
			flex: 2;
			/* border: 2px dashed green; */
			display: flex;
			align-items: center;

			span {
				padding: 0.8rem;
				flex: 1;
				text-align: center;
				border-left: 2px solid #dedede;
			}
		}
	}
`;

export default LeagueSortedByTime;
