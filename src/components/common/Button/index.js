import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
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
    box-shadow: ${({ theme }) => (theme === 'dark' ? 'inset 0 0 100px 100px #E5E5E5' : 'inset 0 0 100px 100px #444d56')};
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
