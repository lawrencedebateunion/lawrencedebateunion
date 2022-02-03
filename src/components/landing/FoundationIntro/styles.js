import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 2rem;
  @media (max-width: 960px) {
    padding-bottom: 0rem;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 0rem;
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 35pt;
    text-align: center;
    white-space: nowrap;
    overflow: show;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;


export const Line = styled.div`
  flex: 1;
  pointer-events: none;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    display: none;
  }
  @media (min-width: 1200px) {
    margin-top: -10%;
  }

  img {
    width: 100%;
    margin-top: 70%;
  }
`;

export const LineRight = styled.div`
  flex: 1;
  pointer-events: none;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    display: none;
  }
  @media (min-width: 1200px) {
    margin-top: -10%;
  }

  img {
    width: 100%;
    margin-bottom: -90%;
  }
`;
