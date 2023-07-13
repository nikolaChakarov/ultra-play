import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const Match = ({ match }) => {
	const { Name, StartDate } = match.$;
	const { Bet } = match;

	const [odds, setOdds] = useState({ w: '', d: '', l: '' });

	const formatedDate = new Date(StartDate).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
	const formatedTime = new Date(StartDate).toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
	});

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
				<span className='date'>
					{formatedDate} {formatedTime}
				</span>
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

	.name-date {
		flex: 3;
		/* border: 2px dashed darkblue; */
		padding: 0.8rem;
	}

	.odds-wrapper {
		flex: 2;
		display: flex;
		/* border: 2px dashed red; */

		span {
			padding: 0.8rem;
			flex: 1;
			text-align: center;
			word-break: keep-all;
			border-left: 2px groove #fff;
		}
	}
`;

export default Match;
