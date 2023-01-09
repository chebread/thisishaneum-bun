import FooterScreen from 'layouts/FooterScreen';
import styled from 'styled-components';
import SvgCheck from 'icons/SvgCheck';
import FooterButton from 'layouts/FooterButton';

const SendButton = ({ onClick }) => {
  return (
    <FooterScreen>
      <Button onClick={onClick}>
        <SvgCheck />
      </Button>
    </FooterScreen>
  );
};

const Button = styled(FooterButton)`
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%); // 35, 31, 27
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%);
  }
`;
export default SendButton;
