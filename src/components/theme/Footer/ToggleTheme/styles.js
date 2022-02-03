import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  margin-right: 0.3rem;

  img {
    margin-bottom: unset;
  }
`;
