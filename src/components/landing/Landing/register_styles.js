import styled from 'styled-components';

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

export const Details = styled.div`
  h1 {
    font-size: 30pt;
  }
  p {
    font-size: 15pt;
    font-weight: bold;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
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

//&:focus {}

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
  font-size: 14px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

export const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  background: #DCDCDC;
  border: 5px solid #DCDCDC;
  border-radius: 10px;
  transition: all 300ms ease hover;
  width: 60%;
  font-size: 16px;
  &:focus {
    border: 2px solid #08755E;
  }
`;