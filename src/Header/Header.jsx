import HeaderScreen from 'layouts/HeaderScreen';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderScreen>
      <HeaderWrapper to="/">thisishaneum</HeaderWrapper>
    </HeaderScreen>
  );
};
const HeaderWrapper = styled(Link)`
  all: unset;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  position: fixed;
  z-index: 2;
  font-size: 25px;
  font-weight: 600;
  z-index: 2;
  &:active {
    color: rgb(225, 225, 225);
    font-size: 23px;
  }
`;

export default Header;
