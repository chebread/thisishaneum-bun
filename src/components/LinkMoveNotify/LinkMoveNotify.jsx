import GradationText from 'components/GradationText.jsx/GradationText';
import styled from 'styled-components';

const LinkMoveNotify = ({ children }) => {
  return (
    <Wrapper>
      <ModalWrapper>
        <Modal>
          <ModalContent>
            Go to <GradationText>{children}</GradationText>
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(18.75px);
  z-index: 1;
`;
const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  all: unset;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: auto;
  min-height: auto;
  border-radius: 30px;
  background-color: rgba(25, 22, 17, 65%);
  backdrop-filter: blur(18.75px);
  z-index: 2;
  margin: 30px;
`;
const ModalContent = styled.div`
  font-size: 25px;
  font-weight: 500;
  padding: 30px;
`;
export default LinkMoveNotify;
