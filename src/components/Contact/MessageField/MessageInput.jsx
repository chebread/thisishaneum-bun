// 이것은 go page 할때에 notify도 해야 함
// button도 마찬가지

import styled from 'styled-components';
import isErrorState from 'states/Contact/isErrorState';
import goPages from 'selectors/Contact/goPages';
import { useRecoilState, useSetRecoilState } from 'recoil';

const MessageInput = ({ value, setValue, placeholder }) => {
  const goPage = useSetRecoilState(goPages);
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
      if (/\S/.test(value)) {
        goPage(1);
        // notify 띄우기!
      } else {
        setIsError(true);
      }
    }
  };
  return (
    <CenterScreen>
      <InputWrapper>
        <Input
          isError={isError}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      </InputWrapper>
    </CenterScreen>
  );
};

const CenterScreen = styled.div`
  position: absolute;
  height: 100%;
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
const Input = styled.input`
  all: unset;
  background-color: ${({ isError }) =>
    isError ? 'rgba(214, 39, 39, 100%)' : 'rgba(30, 27, 22, 80%)'};
  &:hover {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(50, 47, 42, 80%)'};
  }
  &:focus {
    background-color: ${({ isError }) =>
      isError ? '' : 'rgba(60, 57, 52, 80%)'};
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #fff;
  }

  min-height: 50px;
  min-width: 50%;
  padding: 30px;
  border-radius: 45px;
  font-weight: 700;
  font-size: 40px;
  z-index: 1;
`;

export default MessageInput;
