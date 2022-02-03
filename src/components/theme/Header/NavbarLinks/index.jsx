import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import styled from "styled-components";

const NavHover = styled.h1`
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  opacity: 1;
  color: #08755E;
  transition: .5s ease;
  @media only screen and (max-width: 800px) {
    white-space: nowrap;
    font-size: 17px;
  }
  :hover {
    transform: scale(1.12);
  }
`;

const NavbarLinks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
    <a href="#schedule" aria-label="scroll to schedule"><NavHover>Schedule</NavHover></a>
    <a href="#competitions" aria-label="scroll to competitions"><NavHover theme={theme}>Competitions</NavHover></a>
    <a href="#contact" aria-label="scroll to contact"><NavHover theme={theme}>Contact</NavHover></a>

      {/*<AnchorLink href="#contact">plöt store</AnchorLink>*/}

    </Wrapper>
  )

};

export default NavbarLinks;
