import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StoreHeader } from 'components/theme';
import { Container } from 'components/common';
import store from 'assets/illustrations/store.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const StoreIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <StoreHeader/>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
        <h3>about us:</h3>
          <h1>plöt is neither a <font color="red">government</font> nor a <font color="#728EF0">company</font> (although legally speaking, we're currently registered as such).
          <br/><br/>we're forming a <font color="#329932">healthy blend</font> of the two, drawing upon the best elements to create a third option: <u>the utopia</u>.<br/><br/>
          think of plöt as your <font color="#FFD700">ideal home</font>. in a world fraught with issues, starting fresh isn't such a bad thing.
          </h1><br/><h2>soon, this page will contain detailed information on each part of our plan.</h2>
        </Details>
        <Thumbnail>
          <img src={store} alt="person with shopping basket holding an apple" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
