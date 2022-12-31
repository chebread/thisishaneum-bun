import FullScreen from 'layouts/FullScreen';
import StartButton from 'components/Contact/StartButton';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import pageCountState from 'states/Contact/pageCountState';

const ContactIntroduce = () => {
  const [count, setCount] = useRecoilState(pageCountState);

  const onClickStart = () => {
    setCount(1);
  };
  return (
    <FullScreen>
      <PhrasesWrapper>
        <Phrases onClick={onClickStart}>
          If you have any questions or inquiries, click the button to contact me
        </Phrases>
      </PhrasesWrapper>
      <StartButton onClick={onClickStart} />
    </FullScreen>
  );
};

const PhrasesWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Phrases = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 35px;
  font-weight: 600;
  width: 55%;
  z-index: 1;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 30, 30, 100%);
  &:hover {
    background-color: rgba(40, 40, 40, 100%);
  }
  &:active {
    background-color: rgba(50, 50, 50, 100%);
  }
  padding: 27.5px;
  border-radius: 40px;
`;
export default ContactIntroduce;
