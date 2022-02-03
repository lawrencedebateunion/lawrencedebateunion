import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details} from './styles';

export const AboutSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
