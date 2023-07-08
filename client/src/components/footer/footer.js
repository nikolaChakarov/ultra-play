import { styled } from 'styled-components';

const Footer = () => {
	return <FooterWrapper>Nikola Chakarov 2023</FooterWrapper>;
};

const FooterWrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	color: var(--app-blue);
	border-top: 1px solid var(--app-blue);
	font-weight: 100;
	margin-top: auto;
`;

export default Footer;
