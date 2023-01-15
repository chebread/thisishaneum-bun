import DonationButton from 'components/Sponsors/DonationButton';
import styled from 'styled-components';
import Background from 'components/Sponsors/Background';
import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';

const Sponsors = () => {
  return (
    <ContentsScreen>
      <SEO
        title="Sponsors"
        description="If you want to sponsor for Cha Haneum, click this link to sponsor"
      />
      <DonationButton />
    </ContentsScreen>
  );
};

export default Sponsors;
