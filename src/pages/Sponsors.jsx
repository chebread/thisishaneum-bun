import DonationButton from 'components/Sponsors/DonationButton';
import styled from 'styled-components';

const Sponsors = () => {
  return (
    <FullScreen>
      <PhrasesWrapper>
        <Phrases>
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
          <Blue>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </Blue>{' '}
          <White>
            If you'd like to support my progress, please donate about $2 or so
            via Toss.
          </White>{' '}
        </Phrases>
      </PhrasesWrapper>
      <DonationButton />
    </FullScreen>
  );
};
const FullScreen = styled.div`
  position: relative;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
`;
const Blue = styled.span`
  color: rgb(0, 119, 238);
`;
const White = styled.span`
  color: #fff;
`;
const PhrasesWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
const Phrases = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
export default Sponsors;
