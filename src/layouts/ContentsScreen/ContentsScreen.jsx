const { default: styled } = require('styled-components');

const ContentsScreen = styled.div`
  position: relative;
  padding-top: ${({ height }) => (height ? height : '50px')};
  height: calc(100% - ${({ height }) => (height ? height : '50px')});
  width: 100%;
`;

export default ContentsScreen;
