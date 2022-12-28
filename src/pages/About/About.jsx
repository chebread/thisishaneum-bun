import SEO from 'components/SEO';
import Background from 'components/Sponsors/Background';
import ContentsScreen from 'layouts/ContentsScreen';

const About = () => {
  return (
    <ContentsScreen height="100px">
      <SEO
        title="Resume"
        description="If you want to know about Cha Haneum, click this link to check it out in detail"
      />
      <Background />
    </ContentsScreen>
  );
};

export default About;
