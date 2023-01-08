import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Contacts = () => {
  return (
    <AboutScreen>
      <SEO
        title="Contact"
        description="If you are curious about the contact information of Cha Haneum, click this link to check it out in detail"
      />
    </AboutScreen>
  );
};
const Table = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 50%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const Items = styled.div`
  font-size: 50px;
  text-overflow: clip;
`;

export default Contacts;
