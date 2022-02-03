import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 0;
  padding-bottom: 0;
  @media only screen and (max-width: 680px) {
    padding-top: 0.3rem;
  }
  `;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Brand = styled.a`
  width: 300px;
  margin-top: -70px;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media only screen and (max-width: 680px) {
    width: 200px;
    margin-top: -40px;
  }
`;

export const Line = styled.hr`
  height: 0;
  border-radius: 10px;
  border: 3px solid #08755E;
  background: black;
`;
