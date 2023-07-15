import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { formatDate } from '../../utils/formatDate';

const Match = ({ match }) => {
	const { Name, StartDate } = match.$;
	const { Bet } = match;

	const [odds, setOdds] = useState({ w: '', d: '', l: '' });

	const dateFormated = formatDate(StartDate);

	const init = () => {
		const odd = Bet[0].Odd;

		const win = odd.find((el) => el.$.Name === '1');
		win && setOdds((prev) => ({ ...prev, w: win.$.Value }));

		const draw = odd.find((el) => el.$.Name === 'x');
		draw && setOdds((prev) => ({ ...prev, d: draw.$.Value }));

		const lost = odd.find((el) => el.$.Name === '2');
		lost && setOdds((prev) => ({ ...prev, l: lost.$.Value }));
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<MatchWrapper className='match-wrapper'>
			<div className='name-date'>
				<span className='name'>{Name}</span>
				<span className='date'>{dateFormated}</span>
			</div>
			<div className='odds-wrapper'>
				<span className='win'>{odds.w}</span>
				<span className='draw'>{odds.d}</span>
				<span className='lost'>{odds.l}</span>
			</div>
		</MatchWrapper>
	);
};

const MatchWrapper = styled.div`
	display: flex;
	border-bottom: 2px groove #fff;
	background: #fff;

	.name-date {
		flex: 3;
		display: flex;
		flex-direction: column;
		padding: 0.8rem;

		.date {
			font-weight: bold;
		}
	}

	.odds-wrapper {
		flex: 2;
		display: flex;

		span {
			padding: 0.8rem;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			border-left: 2px groove #fff;
			color: #777;
		}
	}
`;

export default Match;
