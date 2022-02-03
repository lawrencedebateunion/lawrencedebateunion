import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const MeThumbnail = styled.div`
  flex: 1;
  .rounded {
    border-radius: 30px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  text-align: center;
  pointer-events: none;
  margin-right: 1rem;
  @media (max-width: 960px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
  @media (max-width: 680px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 3.65rem;
  padding-bottom: 4.65rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: solid 5px;
  border-color: ${({ theme }) => (theme === 'dark' ? '#ccc' : '#000')};
  border-radius: 30px;
  
  @media (max-width: 960px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  @media (max-width: 400px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: 320px) {
    border: none;
  }
  .invert {
    filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  }
  .disappear {
    animation: hide 1s linear 3s 1 forwards;
  
  @keyframes hide {
      to {
          opacity: 0;
      }
    }
  }
  h1 {
    font-size: 18pt;
    line-height: 1.65;
    margin-bottom: 0;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    @media (max-width: 320px) {
      font-size: 11.5pt;
    }
  }
  h2 {
    font-size: 20pt;
    background-image:
    linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 60s linear infinite;
    @keyframes move {
    	to {
    		background-position: 1500vh;
    	}
    }
    @media (max-width: 680px) {
      animation: move 120s linear infinite;
    }
  }
  a {
    color: ${({ theme }) => (theme === 'dark' ? 'green' : '#000')};
  }

  .square:before {
    content:"";
    transition: width 3s ease;
  }
  .text {
    font-size: 18pt;
    font-weight: bold;
    line-height: 1.65;
    margin-bottom: 0;
    color: ${({ theme }) => (theme === 'dark' ? 'green' : '#000')};
    @media (max-width: 320px) {
      margin-top: 0.15rem;
      font-size: 11.5pt;
    }
  }
  .square:hover .text:before {
    content:"0xF6da772c47EaD8Edcc6347AAC4A366CC6cEA6DF4";
    font-size: 14px;
    cursor: pointer;
    @media (max-width: 320px) {
      font-size: 7pt;
    }
  }
  .square:hover span {
    display: none;
  }
`;
