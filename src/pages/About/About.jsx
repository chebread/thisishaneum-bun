import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import AboutIntroduce from './AboutIntroduce';

const About = () => {
  return (
    <AboutScreen>
      <SEO
        title="About"
        description="If you want to know about Cha Haneum, click this link to check it out in detail"
      />
      <AboutIntroduce />
    </AboutScreen>
  );
};

export default About;
