import FullScreen from 'layouts/FullScreen';
import { useRecoilState } from 'recoil';
import { messageState } from 'states/Contact/datasState';
import MessageInput from 'components/Contact/MessageField/MessageInput';
import MessageButton from 'components/Contact/MessageField/MessageButton';

const MessageField = () => {
  const [message, setMessage] = useRecoilState(messageState);

  return (
    <FullScreen>
      <MessageInput
        value={message}
        setValue={setMessage}
        placeholder="Enter your message"
      />
      <MessageButton value={message} type="message" />
    </FullScreen>
  );
};

export default MessageField;
