import styled from 'styled-components';
import SvgCheck from 'assets/icons/SvgCheck';
import FooterScreen from 'layouts/FooterScreen';
import FooterButton from 'layouts/FooterButton';
import { useSetRecoilState } from 'recoil';
import goPages from 'selectors/Contact/goPages';
import isErrorState from 'states/Contact/isErrorState';

const MessageButton = ({ value }) => {
  const setIsError = useSetRecoilState(isErrorState);
  const goPage = useSetRecoilState(goPages);
  const isValue = value != undefined;

  const onClick = () => {
    if (isValue) {
      if (/\S/.test(value)) {
        goPage(1);
        // notify 띄우기
      } else {
        // error
        setIsError(true);
      }
    } else {
      goPage(1);
    }
  };
  return (
    <FooterScreen>
      <Button onClick={onClick}>
        <SvgCheck />
      </Button>
    </FooterScreen>
  );
};

const Button = styled(FooterButton)`
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%); // + 10 // 35, 31, 27
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%); // + 20
  }
`;
export default MessageButton;
