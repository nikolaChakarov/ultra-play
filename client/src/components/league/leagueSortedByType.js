import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';

import Match from '../match/match';

const LeagueSortedByType = ({ events }) => {
	const [showMatches, setShowMathes] = useState({});

	const handleShowMatches = (e) => {
		const id = e.currentTarget.dataset.id;

		setShowMathes((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<LeagueSortedByTypeWrapper className='league-sorted-by-type-wrapper'>
			{events.map((ev, idx) => {
				return (
					<Fragment key={idx}>
						<div
							className='league-info'
							data-id={idx}
							onClick={handleShowMatches}
						>
							<div className='name'>{ev.leagueName}</div>
							<FontAwesomeIcon
								className={showMatches[idx] ? 'show' : 'hide'}
								icon={faCaretUp}
							/>
						</div>

						{showMatches[idx] &&
							ev.events.map((m, i) => {
								return (
									<Fragment key={i}>
										<div className='title'>
											<span className='league-name'>
												{m.$.Name}
											</span>
											<div className='odds'>
												<span>1</span>
												<span>x</span>
												<span>2</span>
											</div>
										</div>
										{m.Match.map((element, idxx) => {
											return (
												<Match
													key={idxx}
													match={element}
												/>
											);
										})}
									</Fragment>
								);
							})}
					</Fragment>
				);
			})}
		</LeagueSortedByTypeWrapper>
	);
};

const LeagueSortedByTypeWrapper = styled.div`
	flex: 1;
	background: #dedede;

	.league-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8rem;
		border-bottom: 2px groove #fff;
		background: var(--app-blue);
		font-size: 1.4rem;
		text-transform: uppercase;
		font-weight: bold;
		color: #fff;

		svg.show {
			transform: rotate(180deg);
		}
	}
	.title {
		background: #dedede;
		display: flex;
		border-bottom: 2px groove #fff;

		.league-name {
			padding: 0.8rem;
			flex: 3;
		}

		.odds {
			flex: 2;
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

export default LeagueSortedByType;
