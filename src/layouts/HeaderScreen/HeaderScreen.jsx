import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

const HeaderScreen = ({ children }) => {
  return (
    <FullScreen position="absolute">
      <Wrapper>{children}</Wrapper>
    </FullScreen>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default HeaderScreen;
