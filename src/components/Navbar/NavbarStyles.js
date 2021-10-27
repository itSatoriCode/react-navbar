import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Container, DEFAULT_DIV, Row } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: #101522;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 9;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	height: 80px;
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	gap: 0.7rem;
	display: flex;
	align-items: center;
	z-index: 10;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 10;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavRow = styled(Row)`
	align-items: center;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		height: 100vh;
		position: absolute;
		padding-top: 80px;
		top: ${({ show }) => (show ? 0 : '-100vh')};
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}

	> div:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled(DEFAULT_DIV)`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.div`
	margin-left: auto;
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&.active {
		border-bottom: 2px solid #fff;
		/* color: #2fa9ea; */
	}
	&:hover {
		border-bottom: 2px solid red;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
			border-bottom: none;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
