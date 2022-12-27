import FullScreen from 'layouts/FullScreen';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { nameState } from 'states/Contact/datasState';
import pageCountState from 'states/Contact/pageCountState';
import styled from 'styled-components';

const EnterName = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useRecoilState(pageCountState);
  const [name, setName] = useRecoilState(nameState);
  const [isWarning, setIsWarning] = useState(false);

  const onClickBack = () => {
    setCount(count - 1);
  };
  const onClickForward = () => {
    //      와 같은 빈문자열 체크하기
    const isBlank = name.replace(/\s/gi, '');
    if (name != '') {
      // 빈것의 조건은 여기에 적용
      setCount(count + 1);
    } else {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      setName(''); // space 때문에 제거함
      setIsWarning(true);
    }
  };
  const onChange = e => {
    const {
      target: { value },
    } = e;
    if (isWarning && value != '') setIsWarning(false); // 입력시 바로 삭제
    setName(value);
  };
  const onKeyDown = e => {
    const { keyCode } = e;
    if (keyCode === 13) {
      onClickForward();
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FullScreen>
      <PhrasesWrapper>
        <Phrases>Enter your name</Phrases>
      </PhrasesWrapper>
      <InputWrapper>
        <Input
          isError={isWarning}
          ref={inputRef}
          placeholder="Fill in here"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={name}
        />
      </InputWrapper>
      <Wrapper>
        <ButtonWrapper>
          <ButtonWrapper2>
            <Button onClick={onClickBack}>Back</Button>
            <Button onClick={onClickForward}>Next</Button>{' '}
            {/* 양식을 안채우면 양식 입력칸에 Error 라고 뜨고 기입하세요 뜨기, 이동 불가능 */}
          </ButtonWrapper2>
        </ButtonWrapper>
      </Wrapper>
    </FullScreen>
  );
};

const PhrasesWrapper = styled.div`
  position: absolute;
  height: calc(50% - 30px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Phrases = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 30px;
  font-weight: 600;
  z-index: 1;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 30, 30, 100%);
  padding: 25px;
  border-radius: 50px;
`;

const InputWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  height: 50px;
  width: 50%;
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
  border-radius: 40px;
  font-size: 40px;
  font-weight: 600;
  z-index: 1;
  padding: 30px;
`;

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const ButtonWrapper2 = styled.div`
  min-width: 50%;
  min-height: 75px;
  position: fixed;
  display: flex;
  flex-direction: row;
  margin: 30px;
  z-index: 2;
  svg {
    height: 50px; // 40px
    width: 50px;
    fill: #fff;
  }
  color: #fff;
  font-size: 35px;
  font-weight: 500;
`;
const Button = styled.button`
  all: unset;
  backdrop-filter: blur(15px);
  min-width: 50%;
  min-height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-top-left-radius: 500px;
    border-bottom-left-radius: 500px;
    color: #e03131;
    background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
    &:hover {
      background-color: rgba(40, 36, 32, 75%); // 35, 31, 27
    }
    &:active {
      background-color: rgba(49, 43, 37, 75%); // + 20
    }
  }
  &:last-child {
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
    color: #0077ee;
    background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
    &:hover {
      background-color: rgba(40, 36, 32, 75%); // 35, 31, 27
    }
    &:active {
      background-color: rgba(49, 43, 37, 75%); // + 20
    }
  }
`;
export default EnterName;
