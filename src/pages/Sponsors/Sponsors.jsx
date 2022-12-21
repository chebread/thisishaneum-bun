import DonationButton from 'components/Sponsors/DonationButton';
import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';
import PhrasesBackground from './Phrases';

const Sponsors = () => {
  return (
    <Screen>
      <PhrasesBackground />
      <DonationButton />
    </Screen>
  );
};
const Screen = styled(FullScreen)`
  overflow-y: hidden;
`;

export default Sponsors;
