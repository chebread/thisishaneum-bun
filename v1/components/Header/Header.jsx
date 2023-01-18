import HeaderScreen from 'layouts/HeaderScreen';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import serviceNameState from 'states/serviceNameState';
import { useRecoilValue } from 'recoil';

const Header = () => {
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
  background-color: rgba(10, 10, 10, 15%); // 12.5
  backdrop-filter: blur(5px);
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

export default Header;
