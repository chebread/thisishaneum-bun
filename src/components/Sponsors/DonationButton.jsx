import styled from 'styled-components';
import SvgCoin from 'icons/SvgCoin';
import { useState } from 'react';
import LinkMoveNotify from 'components/LinkMoveNotify/LinkMoveNotify';
import GradationText from 'components/GradationText.jsx/GradationText';

const DonationButton = () => {
  const [isShow, setIsShow] = useState(false);
  const onMouseEnterButton = () => {
    setIsShow(true);
  };
  const onMouseLeaveButton = () => {
    setIsShow(false);
  };

  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <Button
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            rel="noopener noreferrer"
            href="https://toss.me/chahaneum"
            target="_blank"
          >
            {/* {isShow ? (
              <Notify>
                Go to <GradationText>toss.me/chahaneum</GradationText>
              </Notify>
            ) : (
              <SvgCoin />
            )} */}
            <SvgCoin />
          </Button>
        </ButtonWrapper>
      </Wrapper>
      {/* {isShow ? <LinkMoveNotify>toss.im/chahaneum</LinkMoveNotify> : ''} */}
    </>
  );
};

const Notify = styled.span`
  font-size: 25px;
  font-weight: 600;
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
const Button = styled.a`
  all: unset;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  min-height: 75px;
  border-radius: 30px;
  background-color: rgba(25, 22, 17, 65%);
  &:hover {
    background-color: rgba(33, 29, 25, 65%);
  }
  &:active {
    background-color: rgba(49, 43, 37, 65%);
  }
  backdrop-filter: blur(18.75px);
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
  z-index: 2;
  margin: 30px;
`;
export default DonationButton;
