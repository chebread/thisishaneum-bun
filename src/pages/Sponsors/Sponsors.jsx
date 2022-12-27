import DonationButton from 'components/Sponsors/DonationButton';
import styled from 'styled-components';
import Background from 'components/Sponsors/Background';
import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';
import FullScreen from 'layouts/FullScreen';

const Sponsors = () => {
  return (
    <Screen>
      <SEO
        title="Sponsors"
        description="If you want to sponsor for Cha Haneum, click this link to sponsor"
      />
      <Background />
      <DonationButton />
    </Screen>
  );
};
const Screen = styled(ContentsScreen)`
  overflow-y: hidden;
`;

export default Sponsors;
