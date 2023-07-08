export default function appReducer(state, action) {
	switch (action.type) {
		case 'IS_LOADING':
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case 'ERROR':
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case 'LOAD_DATA':
			return {
				...state,
				eventsList: [...action.payload],
				isLoading: false,
				error: null,
			};
		case 'SEARCH_LEAGUE_NAME':
			return {
				...state,
				searchTerm: action.payload,
			};

		default:
			return state;
	}
}
