import styled from 'styled-components';
import SvgRightArrow from 'assets/icons/SvgRightArrow';

const SvgLeftArrow = () => {
  return (
    <Right>
      <SvgRightArrow />
    </Right>
  );
};

const Right = styled.div`
  svg {
    transform: rotate(180deg);
  }
`;

export default SvgLeftArrow;
