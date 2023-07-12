export function sortMatchesByTime(arr) {
	const init = JSON.parse(JSON.stringify(arr));
	// 1. add league name to match info;
	const allMatches = init
		.map((el) => ({
			...el,
			Match: el.Match.map((m) => ({ ...m, leagueName: el.$.Name })),
		}))
		// 2. get all matches;
		.reduce((acc, curr) => acc.concat(curr.Match), [])
		// 3. sort matches by date desc;
		.sort((a, b) => {
			const date1 = new Date(a.$.StartDate);
			const date2 = new Date(b.$.StartDate);

			return date1 - date2;
		});

	// 4. create object to render
	const res = allMatches.reduce((acc, currentMatch) => {
		const { leagueName } = currentMatch;

		const lastIndex = acc.length - 1;
		const lastElement = acc[lastIndex];

		const currentMatchSet = acc.findLast(
			(el) => el.leagueName === leagueName
		);

		const matchSet = {};

		if (!currentMatchSet) {
			matchSet.leagueName = leagueName;
			matchSet.matches = [currentMatch];
			acc.push(matchSet);
		} else if (
			currentMatchSet &&
			currentMatchSet.leagueName === lastElement.leagueName
		) {
			currentMatchSet.matches = [
				...currentMatchSet.matches,
				currentMatch,
			];
		} else {
			matchSet.leagueName = leagueName;
			matchSet.matches = [currentMatch];
			acc.push(matchSet);
		}

		return acc;
	}, []);

	return res;
}

export function sortMatchesByLeague(arr) {
	const init = JSON.parse(JSON.stringify(arr));

	return [];
}
