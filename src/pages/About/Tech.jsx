import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Tech = () => {
  return (
    <AboutScreen>
      <SEO
        title="Tech stack"
        description="If you are curious about the tech stack of Cha Haneum, click this link to check it out in detail"
      />
      {/* grid로 기술 배열하기 feed 형태로 */}
    </AboutScreen>
  );
};

export default Tech;
