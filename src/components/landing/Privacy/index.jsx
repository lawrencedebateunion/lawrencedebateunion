import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';
import Deletion from './Deletion';

export const Privacy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <GenericHeader/>
      <Wrapper as={Container}>
        <Details theme={theme}>
          <h1>privacy policy:</h1>
          <h2>
            <b>
              last updated december 29th, 2021
            </b>
          </h2>
          <br/>
          <br/>
          <p>
            at plöt, we regard privacy as a fundamental right.
          </p>
          <p>
            > we <u>do not</u> automatically collect any data.
          <br/>
            > we <u>do not</u> use analytical or tracking software.
          <br/>
            > we collect emails submitted through our waitlist.
          <br/>
            > we store collected emails and a collection timestamp on a secure server.
          </p>
          <p>
            questions? email <a href="mailto:privacy@plot.community">privacy@plot.community.</a>
          </p>
          <p>
            re-enter your email to be removed from the waitlist:
          </p>
          <Deletion/>
        </Details>
      </Wrapper>
    </div>
  );
};
