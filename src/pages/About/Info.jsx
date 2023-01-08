import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Info = () => {
  return (
    <AboutScreen>
      <SEO
        title="Information"
        description="If you are curious about the information of Cha Haneum, click this link to check it out in detail"
      />
    </AboutScreen>
  );
};

export default Info;
