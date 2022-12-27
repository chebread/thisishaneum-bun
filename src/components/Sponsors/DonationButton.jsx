import styled from 'styled-components';
import SvgCoin from 'icons/SvgCoin';
import FooterButton from 'layouts/FooterButton';
import FooterScreen from 'layouts/FooterScreen';

const DonationButton = () => {
  return (
    <FooterScreen>
      <Button
        as="a"
        rel="noopener noreferrer"
        href="https://toss.me/chahaneum"
        target="_blank"
      >
        <SvgCoin />
      </Button>
    </FooterScreen>
  );
};

const Button = styled(FooterButton)`
  backdrop-filter: blur(10px);
  // (0) 색상 다시
  background-color: rgba(20, 17, 12, 0%);
  &:hover {
    background-color: rgba(45, 41, 37, 15%); // 10% // 45, 41, 37
  }
  &:active {
    background-color: rgba(69, 63, 57, 40%); // 30%
  }
`;
export default DonationButton;
