import { createContext, useEffect, useReducer } from 'react';
import appReducer from './app-reducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer({}, appReducer);
	const apiGetDataURl = 'http://localhost:8081/matches';

	async function fetchData() {
		try {
			const apiResponse = await fetch(apiGetDataURl);
			const data = await apiResponse.json();

			console.log(data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
