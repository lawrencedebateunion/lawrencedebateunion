import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (max-width: 1960px) {
    padding: 0 0 2rem;
  }
`;

export const Flex = styled.div`
  text-align: center;

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
    @media (max-width: 680px) {
      cursor: default;
    }
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    white-space: nowrap;
    background-color: #444d56;
    color: white;
    text-align: center;
    border-radius: 30px;
    padding: 10px 0;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 1rem;
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 1;
    width: 120px;
    bottom: 35px;
    left: 38.5%;
    margin-left: -71.5px;
    @media (max-width: 680px) {
      display: none;
    }
  }

  .tooltip .tooltiptextemail {
    visibility: hidden;
    white-space: nowrap;
    background-color: #444d56;
    color: white;
    text-align: center;
    border-radius: 30px;
    padding: 10px 0;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 1rem;
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 1;
    width: 120px;
    bottom: 35px;
    left: 38.5%;
    margin-left: -71.5px;
    @media (max-width: 680px) {
      display: none;
    }
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 0.9;
    transform: scale(1.1);
  }

  .tooltip:hover .tooltiptextemail {
    visibility: visible;
    opacity: 0.9;
    transform: scale(1.1);
  }

  {/*.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: #444d56 transparent transparent transparent;
  @media (max-width: 680px) {
    border-color: transparent #444d56 transparent transparent;
    margin-left: -82px;
    margin-top: -23%;
  }*/}
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
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
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }
`;

export const Privacy = styled.div`
  background: none;
  border: none;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
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
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  transition: 0.3s all;
  cursor: pointer;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
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
