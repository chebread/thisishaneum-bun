import styled from 'styled-components';
import SvgCoin from 'icons/SvgCoin';
import { useState } from 'react';
import FooterScreen from 'components/FooterScreen';

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
  background-color: rgba(20, 17, 12, 20%); // rgba(20, 17, 12, 50%); // 15%
  &:hover {
    background-color: rgba(45, 41, 37, 20%); // + 10
  }
  &:active {
    background-color: rgba(69, 63, 57, 20%); // + 20
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
