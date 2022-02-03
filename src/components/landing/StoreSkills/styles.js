import styled from 'styled-components';

export const Wrapper = styled.div`
padding-top: 4rem;
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;
  pointer-events: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  img {
    width: 60%;
  }
`;

export const Thumbnail2 = styled.div`
  pointer-events: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};

  img {
    width: 80%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
`;

export const SkillsWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 0 5px #ccc;
  border-radius: 30px;
  @media (max-width: 960px) {
    box-shadow: none;
  }
`;

export const BrowseWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 0 5px #ccc;
  border-radius: 30px;
  @media (max-width: 960px) {
    box-shadow: none;
  }
`;

export const Details = styled.div`
  text-align: center;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.75;
  }
  .green_text {
    color: #4CA64C;
  }

  u.dotting {
    border-bottom: 1px dotted;
    text-decoration: none;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 180px;
    background-color: #444d56;
    color: white;
    text-align: center;
    border-radius: 30px;
    padding: 15px;
    font-size: 1.5rem;
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -100px;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 0.9;
    transform: scale(1.1);
  }
  a.linkstyle {
    font-size: 2rem;
    color: lightblue;
  }

`;