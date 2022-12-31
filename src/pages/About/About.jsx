import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import Background from 'components/Sponsors/Background';

const About = () => {
  return (
    <AboutScreen>
      <SEO
        title="About"
        description="If you want to know about Cha Haneum, click this link to check it out in detail"
      />
      <Background />
    </AboutScreen>
  );
};

export default About;
