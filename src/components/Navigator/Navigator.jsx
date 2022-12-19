import SvgCoin from 'icons/SvgCoin';
import SvgHome from 'icons/SvgHome';
import SvgContact from 'icons/SvgContact';
import SvgProfile from 'icons/SvgProfile';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navigator = () => {
  const [isShow, setIsShow] = useState(false);
  const onHover = () => {
    setIsShow(true);
  };
  const onLeaveHover = () => {
    setIsShow(false);
    console.log(1);
  };
  return (
    <>
      {isShow ? (
        <>
          <Wrapper show onClick={onLeaveHover}>
            <FooterWrapper>
              <ButtonWrapper>
                <Button to="/">
                  <SvgHome />
                </Button>
                <Button to="a">
                  <SvgProfile />
                </Button>
                <Button to="s">
                  <SvgCoin />
                </Button>
                <Button to="c">
                  <SvgContact />
                </Button>
              </ButtonWrapper>
            </FooterWrapper>
          </Wrapper>
        </>
      ) : (
        <Wrapper>
          <FooterWrapper>
            <Hover onClick={onHover}></Hover>
          </FooterWrapper>
        </Wrapper>
      )}
      <Outlet />
    </>
  );
};
const Hover = styled.div`
  position: fixed;
  min-width: calc(100%);
  height: 105px;
  display: flex;
  flex-direction: row;
  z-index: 2;
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${({ show }) =>
    show
      ? `
    z-index: 10000;
    backdrop-filter: blur(18.75px);
   `
      : ''}
`;
const FooterWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  position: fixed;
  /* @media (max-width: 800px) {
    min-width: 100%;
  } */
  min-width: 50%; // 50%
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 30px 0px;
  justify-content: center;
  z-index: 3;
`;
const Button = styled(NavLink)`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  flex: 1; // min-width시 꽉차게 된다!
  border-radius: 30px;
  background-color: rgba(25, 22, 17, 65%);
  &:hover {
    background-color: rgba(33, 29, 25, 65%);
  }
  &:active {
    background-color: rgba(49, 43, 37, 65%);
  }
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
  margin: 0 30px 0 0;
  /* &:first-child {
    margin: 0 30px 0 30px;
  }
  &:last-child {
    margin: 0 30px 0 0;
  } */
  &:last-child {
    margin: 0;
  }
`;
export default Navigator;
