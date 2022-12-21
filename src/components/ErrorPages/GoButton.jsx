import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SvgHome from 'icons/SvgHome';
import FooterScreen from 'components/FooterScreen';

const GoButton = () => {
  return (
    <FooterScreen>
      <Button to="/">
        <SvgHome />
      </Button>
    </FooterScreen>
  );
};

const Button = styled(Link)`
  all: unset;
  border-radius: 500px; // 30px
  background-color: rgba(30, 27, 22, 100%); // rgba(20, 17, 12, 50%);
  &:hover {
    background-color: rgba(35, 31, 27, 100%); // + 10
  }
  &:active {
    background-color: rgba(49, 43, 37, 100%); // + 20
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
export default GoButton;
