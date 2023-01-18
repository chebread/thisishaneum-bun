import styled from 'styled-components';

const FooterButton = styled.button`
  all: unset;
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
  &:active {
    min-width: 47.5%;
    min-height: 72.5px; // 70px
    svg {
      height: 37.5px;
      width: 37.5px;
    }
  }
`;
export default FooterButton;
