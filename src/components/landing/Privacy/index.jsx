import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ArrowOnlyHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';

export const Privacy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ArrowOnlyHeader/>
      <Wrapper as={Container}>
        <Details theme={theme}>
          <h1>Privacy Policy:</h1>
          <h2>
            <b>
              Updated February 3rd, 2022
            </b>
          </h2>
          <br/>
          <br/>
          <p>
            Lawrence Debate Union regards the Right to Privacy as a <u>fundamental Human Right</u>.
            <br/><br/>
            Therefore:
          </p>
          <p>
            1. We do not automatically collect any data.
          <br/>
            2. We do not use analytical or tracking software.
          <br/>
            3. We collect information submitted through our contact form and tournament registration.
          <br/>
            4. We store collected information on a secure server. Upon resolution of an inquiry or tournament, information is promptly erased.
          </p>
          <p>
            Please direct all inquiries, including regarding this privacy policy, through the contact form on our homepage.
          </p>
        </Details>
      </Wrapper>
    </div>
  );
};
