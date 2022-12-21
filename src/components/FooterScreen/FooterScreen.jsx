import styled from 'styled-components';

const FooterScreen = ({ children }) => {
  return (
    <Wrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export default FooterScreen;
