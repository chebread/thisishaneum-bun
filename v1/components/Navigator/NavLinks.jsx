import styled from 'styled-components';
import ShowButton from 'components/Navigator/ShowButton';
import { NavLink } from 'react-router-dom';
import SvgHome from 'assets/icons/SvgHome';
import SvgContact from 'assets/icons/SvgContact';
import SvgProfile from 'assets/icons/SvgProfile';
import SvgCoin from 'assets/icons/SvgCoin';

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
  background-color: rgba(10, 10, 10, 50%);
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
  gap: 15px; // 아이템들을 30px만큼 gap을 준다
  margin: 0px 0px 30px 0px;
  z-index: 3;
  .active {
    box-sizing: border-box;
    svg {
      fill: #9b9b9b;
    }
    background-color: rgb(25, 22, 17);
    &:hover {
      background-color: rgb(30, 26, 22);
    }
    &:active {
      background-color: rgb(44, 38, 32);
    }
  }
`;
const Nav = styled.div`
  min-height: 75px;
  flex: 1;
`;
const NavButton = styled(NavLink)`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  flex: 1;
  border-radius: 500px; // 30px
  backdrop-filter: blur(15px);
  &:not(.active) {
    background-color: rgb(35, 32, 27);
    &:hover {
      background-color: rgb(40, 36, 32);
    }
    &:active {
      background-color: rgb(54, 48, 42);
    }
  }
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
`;

export default NavLinks;
