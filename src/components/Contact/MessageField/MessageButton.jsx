import styled from 'styled-components';
import SvgCheck from 'assets/icons/SvgCheck';
import FooterScreen from 'layouts/FooterScreen';
import FooterButton from 'layouts/FooterButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import goPages from 'selectors/Contact/goPages';
import isErrorState from 'states/Contact/isErrorState';
import { emailState, messageState, nameState } from 'states/Contact/datasState';
import sendEmail from 'lib/Contact/sendEmail';

const MessageButton = () => {
  const name = useRecoilValue(nameState);
  const email = useRecoilValue(emailState);
  const message = useRecoilValue(messageState);
  const setIsError = useSetRecoilState(isErrorState);
  const goPage = useSetRecoilState(goPages);
  const isValue = messageState != undefined;

  const onClick = async () => {
    if (isValue) {
      if (/\S/.test(message)) {
        await sendEmail({ name, email, message })
          .then(() => {
            // success notify
            alert('200');
          })
          .catch(err => {
            // error notify
            alert('500');
          });
        goPage(1);
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
