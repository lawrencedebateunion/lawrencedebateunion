import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
`;

export const Banner = styled.div`
  margin: 0;
  width: 100%;
  min-height:90vh;
  
  @media (max-height: 640px) {
    height: auto;
  }
  @media (min-width:410px) and (max-width:960px) {
    height: auto;
  }
  @media (min-width:370px) and (max-width:380px) {
    margin-bottom: 1rem;
  }
`;

export const BannerBody = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1080px) {
    padding-top: 6rem;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 6rem 0;
  }
`;

export const BannerDetails = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 25pt;
    font-weight: bold;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 50pt;
    font-weight: bold;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
    .green {
      color: green;
    }
    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
      {/*border: solid 0px;
      border-radius: 30px;
      background: grey;
      display: inline-block;
      padding: 40px;
      padding-left: 45px;
      padding-right: 45px;*/}
`;

export const BannerThumbnail = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  width: 60%;
  right: 120px;
  bottom: 0;
  pointer-events: none;
  @media (max-width: 960px) {
    width: 95%;
    margin-left: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const Line = styled.hr`
  height: 0;
  border-radius: 10px;
  border: 1.5px solid #08755E;
  background: black;
  &:last-child {
}
`;

export const ArrowImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 6%;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 47%;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }

  @keyframes Always {
      100% { transform: scale(1.2);}
  }
  @media only screen and (max-width: 768px) {
    left: 44%;
    width: 12%;
  }
`;

export const Content = styled.div`
`;

export const ContentBody = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContentBody1 = styled.div`
  max-width: 800px;
  align-items: center;
  padding-bottom: 1rem;
`;

export const ContentBodyLead = styled.div`
  padding-top: 0;
  text-align: center;
  h1 {
    font-size: 26pt;
    color: #000;
  }
`;

export const ContentDetails = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  u.dotting {
    border-bottom: 1px dotted;
    text-decoration: none;
  }
  a.linkstyle {
    text-decoration: underline;
    color: ${({ theme }) => (theme === 'dark' ? '#83BAAE' : '#08755E')};
  }
`;

export const ContentThumbnailLeft = styled.div`
  flex: 1;
  pointer-events: none;
  margin-left: 5rem;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  img {
    width: 90%;
  }
`;

export const ContentThumbnailRight = styled.div`
  flex: 1;
  margin-right: 2rem;
  pointer-events: none;

  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 3.5rem;
    margin-left: 0rem;
  }

  img {
    width: 100%;
  }
`;

export const ButtonDisabled = styled.button`
  cursor: not-allowed;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.5s ease;
  display: table;
  margin-top: -1rem;
  margin-bottom: -1.5rem;
  background: ${({ theme }) => (theme === 'dark' ? '#FFF' : '#000')};
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#FFF')};
  :hover {
    box-shadow: inset 0 0 100px 100px #FF9999;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

export const Label = styled.h1`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 26pt;
`;