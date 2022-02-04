import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Privacy, Email, Creator } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from './ToggleTheme';
import social from './social.json';
import twitter from 'assets/illustrations/twitter.svg';
import instagram from 'assets/illustrations/instagram.svg';
import facebook from 'assets/illustrations/facebook.svg';
import github from 'assets/illustrations/github.svg';

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex as={Container}>
        <ToggleTheme/>
        <a href="https://www.instagram.com/lawrencedebateunion" target="_blank" rel="noreferrer"><Privacy theme={theme}> <img src={instagram} alt="button to access privacy policy"/></Privacy></a>
        <a href="https://twitter.com/uvmdebate" target="_blank" rel="noreferrer"><Privacy theme={theme}> <img src={twitter} alt="button to access privacy policy"/></Privacy></a>
        <a href="https://www.facebook.com/LDUVT" target="_blank" rel="noreferrer"><Privacy theme={theme}> <img src={facebook} alt="button to access privacy policy"/></Privacy></a>
        <a href="https://github.com/lawrencedebateunion" target="_blank" rel="noreferrer"><Creator theme={theme}> <img src={github} alt="button to access privacy policy"/></Creator></a>
      </Flex>
      <br/>
      <Flex as={Container}>
        <Links><Link to="/privacy"><u>Privacy policy</u></Link>{" "}|{" "}
        <a href="mailto:hey@tomek.org"><u>Send us an email</u></a></Links>
      </Flex>

        <Details theme={theme}>
          <span><b>
            © {new Date().getFullYear()} Lawrence Debate Union  | Made with{' '}
            <span aria-label="love" role="img">
            ❤️
            </span> by <a href="https://tomek.org"><u>tomek.org</u></a>.</b></span>
        </Details>
    </Wrapper>
)
};
