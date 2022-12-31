import SvgCoin from 'icons/SvgCoin';
import SvgHome from 'icons/SvgHome';
import SvgContact from 'icons/SvgContact';
import SvgProfile from 'icons/SvgProfile';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import SvgMenu from 'icons/SvgMenu';
import SvgXMark from 'icons/SvgXMark';

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
              <ShowButtonWrapper>
                <ShowButton tabIndex={1} onClick={onHover}>
                  <SvgXMark />
                </ShowButton>
              </ShowButtonWrapper>
            </FooterWrapper>
          </Wrapper>
        </>
      ) : (
        <Wrapper>
          <ShowButtonWrapper>
            <ShowButton tabIndex={1} onClick={onHover}>
              <SvgMenu />
            </ShowButton>
          </ShowButtonWrapper>
        </Wrapper>
      )}
    </>
  );
};
const ShowButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const ShowButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  z-index: 3;
  min-height: 75px;
  min-width: 75px;
  border-radius: 50%; // 30px
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(35, 31, 27, 75%); // + 10
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%); // + 20
  }
  svg {
    height: 30px;
    width: 30px;
    fill: #fff;
  }
  margin: 30px;
`;

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${({ show }) =>
    show
      ? css`
          position: fixed;
          z-index: 10000;
          backdrop-filter: blur(20px);
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
  min-width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px 0px 30px 0px;
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
  border-radius: 500px; // 30px
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(35, 31, 27, 75%); // + 10
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%); // + 20
  }
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
export default Navigator;
