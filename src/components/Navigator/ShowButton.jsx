import styled from 'styled-components';
import SvgXMark from 'icons/SvgXMark';
import SvgMenu from 'icons/SvgMenu';

const ShowButton = ({ isClick, onClick }) => {
  return (
    <ButtonScreen>
      <Wrapper>
        <ButtonWrapper>
          <ButtonFrame>
            <Button tabbIndex={1} onClick={onClick}>
              {isClick ? <SvgXMark /> : <SvgMenu />}
            </Button>
          </ButtonFrame>
        </ButtonWrapper>
      </Wrapper>
    </ButtonScreen>
  );
};

const ButtonScreen = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const ButtonWrapper = styled.div`
  height: 135px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonFrame = styled.div`
  // 작아질때 틀임
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 0;
`;
const Button = styled.div`
  all: unset;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%);
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%);
    min-width: 72.5px;
    min-height: 72.5px;
    svg {
      height: 27.5px;
      width: 27.5px;
    }
  }
  // else
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  min-height: 75px;
  min-width: 75px;
  border-radius: 50%;
  svg {
    height: 30px;
    width: 30px;
    fill: #fff;
  }
  z-index: 5;
`;

export default ShowButton;
