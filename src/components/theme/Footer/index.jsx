import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Privacy, Email, Creator } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from './ToggleTheme';
import social from './social.json';
import lock from 'assets/illustrations/lock.svg';
import email from 'assets/illustrations/email.svg';
import creator from 'assets/illustrations/creator.svg';

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex as={Container}>
        {/*
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`email me at ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
          </Links>*/}

        <div className="tooltip">
            <Link to="/404"><Privacy theme={theme}> <img src={lock} alt="button to access privacy policy"/></Privacy></Link>
            <span className="tooltiptext">
              privacy policy
            </span>
          </div>

        <div className="tooltip">
            <a href="mailto:hey@tomek.org"><Email theme={theme}> <img src={email} alt="button to email us"/></Email></a>
            <span className="tooltiptextemail">
              send us an email
            </span>
          </div>

        <Details theme={theme}>
          <span><b>
            © {new Date().getFullYear()} Lawrence Debate Union  | made with{' '}
            <span aria-label="love" role="img">
            ❤️
            </span> by <a href="https://tomek.org"><u>tomek.org</u></a></b></span>
        </Details>
      </Flex>
    </Wrapper>
)
};
