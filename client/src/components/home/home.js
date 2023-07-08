import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/app-state';
import { styled } from 'styled-components';

import Spinner from '../spinner/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const { isLoading, eventsList, searchTerm } = useContext(AppContext);

	const [events, setEvents] = useState([]);

	const handleEvents = () => {
		console.log(eventsList);
		setEvents(eventsList);
	};

	const handleSearch = () => {
		setEvents((prev) =>
			eventsList.filter((el) =>
				el.$.Name.toLocaleLowerCase().includes(
					searchTerm.toLocaleLowerCase()
				)
			)
		);
	};

	useEffect(() => {
		handleSearch();
	}, [searchTerm]);

	useEffect(() => {
		handleEvents();
	}, [eventsList]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<HomeWrapper>
			<div className='inner'>
				{events.map((ev, idx) => (
					<p key={idx}>
						{ev.$.Name}

						<FontAwesomeIcon icon={faCaretDown} />
					</p>
				))}
			</div>
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	position: relative;
	flex: 1;
	overflow: scroll;
	display: flex;
	flex-direction: column;

	.inner {
		border: 2px dashed red;
		overflow: scroll;
		scroll-behavior: smooth;
	}

	p {
		padding: 5px;
		border: dashed 1px green;
	}
`;

export default Home;
