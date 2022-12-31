import styled from 'styled-components';
import ShowButton from 'components/Navigator/ShowButton';
import { NavLink } from 'react-router-dom';
import SvgCoin from 'icons/SvgCoin';
import SvgHome from 'icons/SvgHome';
import SvgContact from 'icons/SvgContact';
import SvgProfile from 'icons/SvgProfile';

const NavLinks = ({ onClick, isClick }) => {
  return (
    <NavScreen onClick={onClick}>
      <NavWrapper>
        <NavButtonWrapper>
          <Nav>
            <NavButton to="/">
              <SvgHome />
            </NavButton>
          </Nav>
          <Nav>
            <NavButton to="a">
              <SvgProfile />
            </NavButton>
          </Nav>
          <Nav>
            <NavButton to="s">
              <SvgCoin />
            </NavButton>
          </Nav>
          <Nav>
            <NavButton to="c">
              <SvgContact />
            </NavButton>
          </Nav>
        </NavButtonWrapper>
        <ShowButton isClick={isClick}></ShowButton>
      </NavWrapper>
    </NavScreen>
  );
};
const NavScreen = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px); // 15px
  z-index: 1000;
`;
const NavWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const NavButtonWrapper = styled.div`
  position: fixed;
  min-width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px 0px 30px 0px;
  z-index: 3;
  // (0): 현 위치시 배경 나중에 구현
  /* .active {
    background-color: rgba(56, 48, 42, 75%);
    &:active {
      background-color: rgba(59, 53, 47, 75%);
    }
  } */
`;
const Nav = styled.div`
  min-height: 75px;
  flex: 1; // min-width시 꽉차게 된다!
  margin: 0 30px 0 0;
`;
const NavButton = styled(NavLink)`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  flex: 1; // min-width시 꽉차게 된다!
  border-radius: 500px; // 30px
  backdrop-filter: blur(15px);
  /* &:not(.active) { */
  background-color: rgba(30, 27, 22, 75%);
  &:hover {
    background-color: rgba(35, 31, 27, 75%);
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%);
    // (0): 작아지는 것 나중에 구현
  }
  /* } */
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
  margin: 0 30px 0 0;
  &:last-child {
    margin: 0;
  }
`;

export default NavLinks;
