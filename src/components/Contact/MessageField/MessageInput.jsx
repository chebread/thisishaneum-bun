import styled from 'styled-components';
import isErrorState from 'states/Contact/isErrorState';
import { useRecoilState } from 'recoil';
import reactTextareaAutosize from 'react-textarea-autosize';

const MessageInput = ({ setValue, placeholder }) => {
  const [isError, setIsError] = useRecoilState(isErrorState);

  const onChange = e => {
    const {
      target: { value },
    } = e;
    if (isError) {
      setIsError(false);
    }
    setValue(value);
  };
  const onFocus = () => {
    // 고민하기!
    if (isError) {
      setIsError(false);
    }
  };
  const onKeyDown = e => {
    const { keyCode } = e;
    if (keyCode === 13) {
      // enter시에 높이 늘어나게 한다!
    }
  };
  return (
    <CenterScreen>
      <InputWrapper>
        <Textarea
          $isError={isError}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          maxRows={5}
        />
      </InputWrapper>
    </CenterScreen>
  );
};

const CenterScreen = styled.div`
  position: absolute;
  height: calc(100% - 30px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Textarea = styled(reactTextareaAutosize)`
  all: unset;
  background-color: ${({ $isError }) =>
    $isError ? 'rgba(214, 39, 39, 100%)' : 'rgba(30, 27, 22, 80%)'};
  &:hover {
    background-color: ${({ $isError }) =>
      $isError ? '' : 'rgba(50, 47, 42, 80%)'};
  }
  &:focus {
    background-color: ${({ $isError }) =>
      $isError ? '' : 'rgba(60, 57, 52, 80%)'};
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #fff;
  }
  //
  height: 50px;
  width: 50%;
  padding: 30px;
  border-radius: 45px;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  z-index: 1;
`;

export default MessageInput;
