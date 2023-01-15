import HeaderScreen from 'layouts/HeaderScreen';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import serviceNameState from 'states/Contact/serviceNameState';
import styled from 'styled-components';

const IntroduceHeader = () => {
  const serviceName = useRecoilValue(serviceNameState);

  return (
    <HeaderScreen>
      <Wrapper>
        <HeaderWrapper to="/">{serviceName}</HeaderWrapper>
      </Wrapper>
    </HeaderScreen>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  mix-blend-mode: difference;
`;
const HeaderWrapper = styled(Link)`
  all: unset;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  position: fixed;
  z-index: 2;
  font-size: 25px;
  font-weight: 600;
  z-index: 2;
  &:active {
    color: rgb(225, 225, 225);
    font-size: 23px;
  }
`;
export default IntroduceHeader;
