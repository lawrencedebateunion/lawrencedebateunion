import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => (theme === 'light' ? 'rgba(255, 255, 255, 0.91)' : 'rgba(33, 33, 33, 0.95)')};
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
	top: 0;
  z-index:1000;
`;