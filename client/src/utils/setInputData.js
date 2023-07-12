export function setInputData(arr) {
	let init = JSON.parse(JSON.stringify(arr));

	// set only matches with 'Match Winner' status
	let eventWinners = init.map((ev) => ({
		...ev,
		Match: ev.Match.map((m) => {
			return {
				...m,
				Bet: m.Bet.filter((b) => {
					return b.$.Name === 'Match Winner';
				}),
			};
		}),
	}));

	// filter matches with no Bet
	eventWinners = eventWinners.map((ev) => ({
		...ev,
		Match: ev.Match.filter((m) => m.Bet.length > 0),
	}));

	// filter event with no Match
	eventWinners = eventWinners.filter((ev) => ev.Match.length > 0);

	return eventWinners;
}
