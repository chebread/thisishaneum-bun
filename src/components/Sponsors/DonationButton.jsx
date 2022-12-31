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
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 100%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(40, 36, 32, 100%); // + 10 // 35, 31, 27
  }
  &:active {
    background-color: rgba(49, 43, 37, 100%); // + 20
  }
`;
export default DonationButton;
