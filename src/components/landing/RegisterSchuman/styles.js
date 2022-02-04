import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 0;
`;

export const Details = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 30pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;
export const RegisterButton = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 12pt;
  padding: 10px;
  border: none;
  border-radius: 10px;
  min-width: 150px;
  transition: all 0.5s ease;
  background: #DCDCDC;
  color: #666;
  :hover {
    background: #08755E;
    color: white;
  }
  @media only screen and (max-width: 640px) {
    font-size: 8pt;
  }
`;

export const Wrapper1 = styled.div`
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;

export const Input = styled.input`
  font-size: 12pt;
  padding: 10px;
  text-align: center;
  background: #DCDCDC;
  border: 2px solid #DCDCDC;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  @media only screen and (max-width: 960px) {
    font-size: 10pt;
  }
  @media only screen and (max-width: 640px) {
    font-size: 8pt;
  }
  &:hover {
    border: 2px solid #08755E;
  }
`;

export const Select = styled.select`
  color: #666666;
  font-size: 12pt;
  padding: 10px;
  text-align: center;
  background: #DCDCDC;
  width: 100%;
  border: 2px solid #DCDCDC;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 10px;
  transition: all 300ms ease hover;
  &:hover {
    border: 2px solid #08755E;
  }
`;

export const Submit = styled.button`
  font-size: 24px;
  padding: 10px;
  border: 3px solid #ca043f;
  background: #fff;
  width: 30%;
  margin: 20px;
  border-radius: 5px;
  transition: all 300ms ease;
  &:hover {
    border: 3px solid #ca043f;
    background: #ca043f;
    color: #e4e4e4;
    cursor: pointer;
  }
`;

export const Label = styled.h1`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 26pt;
  color: #000;
`;

export const SubLabel = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16pt;
  font-weight: bold;
  line-height: 2;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
  a {
    text-decoration: underline;
  }

`;

export const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  background: #DCDCDC;
  border: 5px solid #DCDCDC;
  border-radius: 10px;
  transition: all 300ms ease hover;
  width: 66%;
  font-size: 16px;
  &:hover {
    border: 2px solid #08755E;
  }
`;