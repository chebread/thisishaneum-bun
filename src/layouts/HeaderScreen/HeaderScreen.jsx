import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

const HeaderScreen = ({ children }) => {
  return (
    <FullScreen position="absolute">
      <Wrapper>
        <ButtonWrapper>{children}</ButtonWrapper>
      </Wrapper>
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
const ButtonWrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 10, 10, 15%); // 12.5
  backdrop-filter: blur(5px);
  z-index: 2;
`;
export default HeaderScreen;
