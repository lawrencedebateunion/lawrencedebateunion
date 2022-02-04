import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 1960px) {
    padding-bottom: 2rem;
  }
  background:#08755E;
  padding-top: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Links = styled.div`
  flex: 1;
  font-weight: bold;
  color: white;
  a {
    color: white;
  }
`;

export const Details = styled.div`
text-align: center;
margin-left: auto;
margin-right: auto;
margin-top: 0.5rem;
  h2,
  a,
  span {
    color: #212121;
    font-size: 1rem;
    font-weight: bold;
    line-height: 0.4;
    color: white;
  }
`;

export const Privacy = styled.div`
  background: none;
  border: none;
  margin-right: 3.2rem;
  filter: invert(1);
  transition: 0.3s all;
  cursor: pointer;
  @media (max-width: 960px) {
    text-align: center;
  }
  img {
    margin-bottom: unset;
  }
`;

export const Creator = styled.div`
  background: none;
  border: none;
  filter: invert(1);
  transition: 0.3s all;
  cursor: pointer;
  @media (max-width: 960px) {
    text-align: center;
  }
  img {
    margin-bottom: unset;
  }
`;

export const Email = styled.div`
  background: none;
  border: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  cursor: pointer;
  margin-left: 0.6rem;
  margin-right: 0.2rem;
  @media (max-width: 960px) {
    text-align: center;
  }

  img {
    margin-bottom: unset;
  }
`;
