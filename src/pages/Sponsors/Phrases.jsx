import styled from 'styled-components';

const PhrasesBackground = () => {
  return (
    <PhrasesWrapper>
      <Phrases>
        {/* 이것의 길이를 유동화 해야함 */}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
        <Blue>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </Blue>{' '}
        <White>
          If you'd like to support my progress, please donate about $2 or so via
          Toss.
        </White>{' '}
      </Phrases>
    </PhrasesWrapper>
  );
};
const Blue = styled.span`
  color: rgb(0, 119, 238);
`;
const White = styled.span`
  color: #fff;
`;
const PhrasesWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: calc(100% - 15px);
  width: calc(100% - 20px);
  margin: 5px 10px 10px 10px;
`;
const Phrases = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
export default PhrasesBackground;
