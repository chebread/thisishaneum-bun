import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';
import { useRecoilState } from 'recoil';
import { emailState, messageState, nameState } from 'states/Contact/datasState';
import styled from 'styled-components';
import SendButton from 'components/Contact/SendButton';
import sendEmail from 'components/Contact/sendEmail';
import { useEffect, useRef, useState } from 'react';

// (0): email에 메시지 보낼때 markdown을 html으로 하여 전송하는 기능 만들기 => 불가능할 듯
// (1): 각각의 요소가 입력이 안되어 있거나 공백 문자로 채워져 있다면 빨간색으로 배경 하기
// (2): 하단 Notify 컴포넌트 만들기
// (3): 1번째 input에서 enter시 2번째로 가고 3번째로 가는 것 만들기 (focus ref만 되는가?)
const Contact = () => {
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [message, setMessage] = useRecoilState(messageState);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const onChange = e => {
    const {
      target: { value, name },
    } = e;
    if (name === 'name') {
      if (nameError && value != '') setNameError(false);
      setName(value);
    }
    if (name === 'email') {
      if (emailError && value != '') setEmailError(false);
      setEmail(value);
    }
    if (name === 'message') {
      if (msgError && value != '') setMsgError(false);
      setMessage(value);
    }
  };
  const initValues = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const emailFormMatch = emailStr => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/gi;
    const isMatch = emailStr.match(regex);
    if (isMatch === null) return false; // 이메일 형식이 아님
    else return true; // 이메일 형식임
  };
  const blankMatch = str => {
    // (0): 수정 필요
    // 그냥 모든 문자열이 공백인지만 확인하면 된다
    if (str === '') return false;
    return true;
  };
  const onClickSend = async () => {
    if (blankMatch(name) === false) {
      setNameError(true);
    }
    if (blankMatch(email) === false || !emailFormMatch(email)) {
      setEmailError(true);
    }
    if (blankMatch(message) === false) {
      setMsgError(true);
    }
    const isSuccess =
      blankMatch(name) &&
      blankMatch(email) &&
      blankMatch(message) &&
      emailFormMatch(email);
    if (isSuccess) {
      await sendEmail({ name, email, message })
        .then(() => {
          // succed 알림 전송하기
          alert('Succeed');
          initValues();
        })
        .catch(() => {
          // error 알림 전송하기
          alert('Error'); // 503 오류임
        });
    }
  };
  return (
    <ContentsScreen>
      <SEO title="Contact" description="This is Cha Han-eum's contact" />
      <CenterWrapper>
        <Wrapper>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
            value={name}
            isError={nameError}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            value={email}
            isError={emailError}
          />
          <Textarea
            type="text"
            name="message"
            placeholder="Message"
            onChange={onChange}
            value={message}
            isError={msgError}
          />
        </Wrapper>
      </CenterWrapper>

      <SendButton onClick={onClickSend} />
    </ContentsScreen>
  );
};
const CenterWrapper = styled.div`
  position: absolute;
  height: calc(100% - 195px);
  width: calc(100% - 30px);
  display: flex;
  justify-content: center;
  margin: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 15px;
`;
const Textarea = styled.textarea`
  all: unset;
  word-break: break-all;
  height: 100%;
  width: calc(100% - 50px);
  background-color: ${({ isError }) =>
    isError
      ? 'rgba(214, 39, 39, 100%)'
      : 'rgba(30, 30, 30, 100%)'}; // rgba(224, 49, 49, 100%)
  &:hover {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(40, 40, 40, 100%)'}; //  rgba(214, 39, 39, 100%);
  }
  &:focus {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(50, 50, 50, 100%)'}; // rgba(204, 29, 29, 100%)
  }
  &::placeholder {
    color: ${({ isError }) => (isError ? '#fff' : 'darkgray')};
  }
  border-radius: 30px;
  font-size: 30px;
  padding: 25px;
  z-index: 1;
`;
const Input = styled.input`
  all: unset;
  height: 30px;
  width: calc(100% - 50px);
  backdrop-filter: blur(15px);
  background-color: ${({ isError }) =>
    isError
      ? 'rgba(214, 39, 39, 100%)'
      : 'rgba(30, 30, 30, 100%)'}; // rgba(224, 49, 49, 100%)
  &:hover {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(40, 40, 40, 100%)'}; //  rgba(214, 39, 39, 100%);
  }
  &:focus {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(50, 50, 50, 100%)'}; // rgba(204, 29, 29, 100%)
  }
  &::placeholder {
    color: ${({ isError }) => (isError ? '#fff' : 'darkgray')};
  }
  border-radius: 30px;
  font-size: 30px;
  padding: 25px;
  z-index: 1;
`;
export default Contact;

// ref={sRef}
//             onKeyDown={e => {
//               if (e.key === 'Enter') {
//                 tRef.current.focus();
//               }
//             }}
// useEffect(() => {
//   if (fRef.current) {
//     fRef.current.focus();
//   }
// }, []);
