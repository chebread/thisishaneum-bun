import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

const FooterScreen = ({ children }) => {
  return (
    <FullScreen position="absoulte">
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
  justify-content: flex-end;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  height: 135px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export default FooterScreen;
