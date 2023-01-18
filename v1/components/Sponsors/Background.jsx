import styled from 'styled-components';

const Background = () => {
  return (
    <PhrasesWrapper>
      <Phrases
        rel="noopener noreferrer"
        target="_blank"
        href="https://toss.me/chahaneum"
      >
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

const PhrasesWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  width: calc(100% - 20px);
  padding: 0px 10px 0 10px; // 이것을 그냥 한 글자당 paddding을 주어 하자!
`;
const Phrases = styled.div`
  all: unset;
  display: inline-block;
  font-size: 50px;
  font-weight: 600;
`;
const Blue = styled.span`
  color: #0077ee;
  border-radius: 25px;
  /* padding: 0 10px 0 10px; */
`;
const White = styled.span`
  color: #fff;
  border-radius: 25px;
`;
export default Background;
