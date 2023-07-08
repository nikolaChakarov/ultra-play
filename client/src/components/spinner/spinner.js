import ScaleLoader from 'react-spinners/ScaleLoader';
import { styled } from 'styled-components';

const Spinner = () => {
	return (
		<SpinnerWrapper>
			<ScaleLoader color='#213951' />
		</SpinnerWrapper>
	);
};

const SpinnerWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Spinner;
