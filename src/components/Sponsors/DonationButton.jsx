import styled from 'styled-components';
import SvgCoin from 'icons/SvgCoin';
import { useState } from 'react';
import FooterScreen from 'components/FooterScreen';
// import LinkMoveNotify from 'components/LinkMoveNotify/LinkMoveNotify';
// import GradationText from 'components/GradationText.jsx/GradationText';

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
      <FooterScreen>
        <Button
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          rel="noopener noreferrer"
          href="https://toss.me/chahaneum"
          target="_blank"
        >
          <SvgCoin />
        </Button>
      </FooterScreen>
    </>
  );
};

const Button = styled.a`
  all: unset;
  backdrop-filter: blur(15px); // 18.75px // safari는 왜 달라질까? // invert(1)
  background-color: rgba(20, 17, 12, 25%); // rgba(20, 17, 12, 50%); // 15%
  &:hover {
    background-color: rgba(45, 41, 37, 25%); // + 10
  }
  &:active {
    background-color: rgba(69, 63, 57, 25%); // + 20
  }
  // else
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  min-height: 75px;
  border-radius: 500px;
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
  z-index: 2;
  margin: 30px;
`;
export default DonationButton;

{
  /* {isShow ? (
    <Notify>
      Go to <GradationText>toss.me/chahaneum</GradationText>
    </Notify>
  ) : (
    <SvgCoin />
  )} */
}
// const Notify = styled.span`
//   font-size: 25px;
//   font-weight: 600;
// `;
