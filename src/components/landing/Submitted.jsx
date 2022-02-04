import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details } from './RegisterSchuman/styles';

export const Submitted = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
        <h1>Inquiry Submitted.</h1>
        <p>
          Expect a response within the next week.
        </p>
      </Details>
    </Wrapper>
  );
};
