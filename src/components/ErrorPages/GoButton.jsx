import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SvgHome from 'assets/SvgHome';
import FooterScreen from 'layouts/FooterScreen';
import FooterButton from 'layouts/FooterButton';

const GoButton = () => {
  return (
    <FooterScreen>
      <Button as={Link} to="/">
        <SvgHome />
      </Button>
    </FooterScreen>
  );
};

const Button = styled(FooterButton)`
  backdrop-filter: blur(15px);
  background-color: rgba(30, 27, 22, 75%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%); // + 10 // 35, 31, 27
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%); // + 20
  }
`;
export default GoButton;
