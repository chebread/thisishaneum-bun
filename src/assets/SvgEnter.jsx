import styled from 'styled-components';
import SvgLeftArrow from 'assets/SvgLeftArrow';

const Svg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    role="img"
    {...props}
  >
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"
        data-original="#000000"
      />
      <path
        d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414z"
        data-original="#000000"
      />
    </g>
  </svg>
);

const SvgEnter = () => {
  return (
    <Right>
      <Svg />
    </Right>
  );
};

const Right = styled.div`
  svg {
    transform: rotateY(180deg);
  }
`;

export default SvgEnter;
