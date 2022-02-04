import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	a {
			margin-right: 1.5rem;
			&:last-child {
					margin-right: unset;
			}
	}
`;

export const NavLink = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #08755E;
  transition: .25s ease;
  margin-top:-0.5rem;
  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
  :hover {
    transform: scale(1.12);
  }
`;
