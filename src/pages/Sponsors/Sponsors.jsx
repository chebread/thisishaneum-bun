import DonationButton from 'components/Sponsors/DonationButton';
import styled from 'styled-components';
import Background from 'components/Sponsors/Background';
import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';

const Sponsors = () => {
  return (
    <Screen>
      <SEO
        title="Sponsors"
        description="If you want to sponsor for Cha Haneum, click this link to sponsor"
      />
      {/* background에서 글자들의 p hover시 이동하는 것 만들기 */}
      <Background />
      {/* <DonationButton /> */}
    </Screen>
  );
};
const Screen = styled(ContentsScreen)`
  overflow-y: hidden;
`;

export default Sponsors;
