import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutScreen>
      <SEO
        title="About"
        description="If you want to know about Cha Haneum, click this link to check it out in detail"
      />
      <IntroWrapper>
        <IntroPhrasesWrapper>
          <IntroPhrases>I am</IntroPhrases>
          <IntroPhrases>Cha Haneum.</IntroPhrases>
        </IntroPhrasesWrapper>
      </IntroWrapper>
      <RowCenterWrapper>
        <PhrasesWrapper>
          <Phrases>
            I am Cha Han-eum, a web front-end developer. I like intuitive,
            simple configuration, dynamic Functionality and interactive response
            are important to configure the front-end page, predicting Configure
            your frontend to be as responsive as possible. I'm new to technology
            oriented, avoiding static forms of development.
          </Phrases>
          <Phrases>
            Static avoids development means that static content is not produced
            and utilized. This means that most of the code is written in
            functional form, and most of Content is configured using APIs.
          </Phrases>
        </PhrasesWrapper>
      </RowCenterWrapper>
    </AboutScreen>
  );
};
const IntroWrapper = styled.div`
  width: 100%;
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IntroPhrasesWrapper = styled.div`
  width: 45%;
`;
const IntroPhrases = styled.div`
  font-size: 96px;
  font-weight: 800;
`;
const RowCenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
`;
const PhrasesWrapper = styled.div`
  width: 45%;
`;
const Phrases = styled.div`
  font-size: 24px;
  line-height: 44px;
  font-weight: 400;
`;

export default About;
