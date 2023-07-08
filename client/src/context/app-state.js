import { createContext, useEffect, useReducer } from 'react';
import appReducer from './app-reducer';

const init = {
	eventsList: [],
	error: null,
	isLoading: false,
};

export const AppContext = createContext(init);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, init);
	const apiGetDataURl = 'http://localhost:8081/matches';

	async function fetchData() {
		dispatch({
			type: 'IS_LOADING',
		});
		try {
			const apiResponse = await fetch(apiGetDataURl);
			const { XmlSports } = await apiResponse.json();

			const events = XmlSports?.Sport[0]?.Event;

			if (!events || events.length === 0) {
				throw new Error('No events to show');
			}

			dispatch({
				type: 'LOAD_DATA',
				payload: events,
			});
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: 'SERVER ERROR',
			});
			console.error(err);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				isLoading: state.isLoading,
				error: state.error,
				eventsList: state.eventsList,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
