import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, NavLink } from './styles';

const NavbarLinks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
    <a href="#schedule" aria-label="scroll to schedule"><NavLink>Schedule</NavLink></a>
    <a href="#competitions" aria-label="scroll to competitions"><NavLink theme={theme}>Competitions</NavLink></a>
    <a href="#contact" aria-label="scroll to contact"><NavLink theme={theme}>Contact</NavLink></a>
      {/*<AnchorLink href="#contact">Pictures</AnchorLink>*/}
    </Wrapper>
  )

};

export default NavbarLinks;
