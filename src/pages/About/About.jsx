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
          <IntroPhrases>안녕하세요</IntroPhrases>
          <IntroPhrases>차한음입니다.</IntroPhrases>
        </IntroPhrasesWrapper>
      </IntroWrapper>
      <RowCenterWrapper>
        <PhrasesWrapper>
          <Phrases>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            pariatur veniam sint est vitae iusto ex quia asperiores laborum quo!
            Voluptas expedita officia ut obcaecati autem nesciunt nobis
            blanditiis sed.
          </Phrases>
          <Phrases>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            veniam nostrum culpa beatae recusandae officiis adipisci corporis
            autem totam laudantium corrupti in sint ratione, eum temporibus odit
            laboriosam ea eos.
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
  font-size: 28px;
  line-height: 48px;
  font-weight: 400;
`;

export default About;
