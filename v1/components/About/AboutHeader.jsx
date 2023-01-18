import serviceNameState from 'states/serviceNameState';
import HeaderScreen from 'layouts/HeaderScreen';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

// sausage links overflow x 안되는 이유 찾기
const AboutHeader = () => {
  const serviceName = useRecoilValue(serviceNameState);

  return (
    <HeaderScreen>
      <HeaderWrapper>
        <Wrapper>
          <Header to="/">{serviceName}</Header>
        </Wrapper>
        <Wrapper>
          <SausageHeader>
            <ItemsWrapper>
              <Items to="a" end>
                About
              </Items>
            </ItemsWrapper>
            <ItemsWrapper>
              <Items to="a/t" end>
                Tech stack
              </Items>
            </ItemsWrapper>
            <ItemsWrapper>
              <Items to="a/i" end>
                Information
              </Items>
            </ItemsWrapper>
            <ItemsWrapper>
              <Items to="a/c" end>
                Contact
              </Items>
            </ItemsWrapper>
            <ItemsWrapper>
              <Items to="a/j" end>
                Careers
              </Items>
            </ItemsWrapper>
            <ItemsWrapper>
              <Items to="a/p" end>
                Projects
              </Items>
            </ItemsWrapper>
          </SausageHeader>
        </Wrapper>
      </HeaderWrapper>
    </HeaderScreen>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(10, 10, 10, 15%); // 12.5
  backdrop-filter: blur(5px);
  z-index: 2;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Header = styled(Link)`
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
const SausageHeader = styled.div`
  display: flex;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  font-size: 20px;
  color: #fff;
  height: 50px;
`;
const ItemsWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    background-color: rgb(7, 238, 0);
    color: #000;
    &:active {
      background-color: rgb(0, 208, 0);
    }
  }
`;
const Items = styled(NavLink)`
  all: unset;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  height: 50px;
  padding: 0 15px 0 15px;
  border-radius: 500px;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 80%);
  &:not(.active) {
    &:hover {
      background-color: rgba(50, 47, 42, 80%);
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
export default AboutHeader;
