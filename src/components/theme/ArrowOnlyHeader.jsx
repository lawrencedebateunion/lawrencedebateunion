import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton } from './SubBrandStyles';
import leftarrow from 'assets/illustrations/leftarrow.svg';
import { navigate } from "gatsby"

export const ArrowOnlyHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <NavButton onClick={()=>{navigate(-1)}} theme={theme} src={leftarrow} alt="arrow to return to homepage"/>
      </ArrowWrapper>
    </Wrapper>
  );
};
