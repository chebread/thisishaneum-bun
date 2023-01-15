import SvgLeftArrow from 'assets/icons/SvgLeftArrow';
import SvgRightArrow from 'assets/icons/SvgRightArrow';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import goPages from 'selectors/Contact/goPages';

const PageNavigator = ({ isError }) => {
  // isError는 값이 입력되지 않았음을 나타냄
  const goPage = useSetRecoilState(goPages);
  const goNext = () => {
    if (!isError) goPage(-1);
  };
  const goPrevious = () => {
    goPage(1);
  };

  return (
    <Wrapper>
      <BtnWrapper>
        <Btn onClick={goPrevious}>
          <SvgLeftArrow />
        </Btn>
      </BtnWrapper>
      <BtnWrapper>
        <Btn onClick={goNext}>
          <SvgRightArrow />
        </Btn>
      </BtnWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BtnWrapper = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
const Btn = styled.button`
  all: unset;
  z-index: 5;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%); // + 10 // 35, 31, 27
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%); // + 20
    min-width: 67.5px;
    min-height: 67.5px;
    svg {
      height: 25px;
      width: 25px;
    }
  }
  min-height: 70px;
  min-width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 27.5px;
    width: 27.5px;
    fill: #fff;
  }
`;

export default PageNavigator;
