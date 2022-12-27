import styled from 'styled-components';

const FullScreen = styled.div`
  position: ${({ position }) => (position ? position : 'relative')};
  height: 100%;
  width: 100%;
`;

export default FullScreen;
