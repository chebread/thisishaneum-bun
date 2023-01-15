import FullScreen from 'layouts/FullScreen';
import { useState } from 'react';
import styled from 'styled-components';
import PageNavigator from './pageNavigator';
import StartButton from './StartButton';

const NameField = () => {
  const [isError, setIsError] = useState(false);
  return (
    <FullScreen>
      <CenterScreen>
        <InputWrapper>
          <Input placeholder="Enter your name" />
        </InputWrapper>
      </CenterScreen>
      <PageNavigator isError={isError} />
      <StartButton isError={isError} />
    </FullScreen>
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
  background-color: rgba(30, 27, 22, 80%);
  &:hover {
    background-color: rgba(50, 47, 42, 80%);
  }
  &:focus {
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

export default NameField;
