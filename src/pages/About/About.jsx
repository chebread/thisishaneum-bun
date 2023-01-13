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
            Hello, this is front-end developer Cha Han-eum. I construct an
            intuitive and simple layout. It also provides a UI that users can
            predict, and develops a UI for users, not a UI that developers can
            easily develop.
          </Phrases>
          <Phrases>
            When I write code, I actively develop using new technologies and
            develop based on functional programming where possible.
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
  width: 650px;
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
  width: 650px;
`;
const Phrases = styled.div`
  font-size: 24px;
  line-height: 44px;
  font-weight: 400;
`;

export default About;
