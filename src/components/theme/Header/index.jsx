import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Wrapper } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <Navbar />
    </Wrapper>
  );
};
