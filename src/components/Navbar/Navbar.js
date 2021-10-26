import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavRow,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './NavbarStyles';
import { IoLogoYoutube } from 'react-icons/io';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const data = ['About', 'Services', 'Products', 'Pricing'];

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" onClick={scroll.scrollToTop}>
						<IoLogoYoutube />
						LOGO
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <FaBars />}
					</MobileIcon>

					<NavRow onClick={() => setShow(!show)} show={show}>
						{data.map((navItem, index) => (
							<NavItem key={index}>
								<NavLinks
									spy={true}
									duration={500}
									smooth={true}
									exact="true"
									offset={-80}
									to={navItem.toLowerCase()}
									onClick={() => setShow(false)}
								>
									{navItem}
								</NavLinks>
							</NavItem>
						))}
						<NavItemBtn>
							<NavBtnLink to="/sign-up">
								<Button
									padding="0.7rem"
									background="none"
									onClick={() => setShow(false)}
									fontBig
									primary
								>
									SIGN UP
								</Button>
							</NavBtnLink>
						</NavItemBtn>
					</NavRow>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
