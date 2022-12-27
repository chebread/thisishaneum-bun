import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';
import styled from 'styled-components';

const About = () => {
  return (
    <ContentsScreen>
      <SEO
        title="Resume"
        description="If you want to know about Cha Haneum, click this link to check it out in detail"
      />
      <FeedWrapper>
        <Feed>
          <Contents>Tech stack</Contents>
          <Contents>Information</Contents>
          <Contents>Contact</Contents>
          <Contents>Careers</Contents>
          <Contents>Projects</Contents>
        </Feed>
      </FeedWrapper>
    </ContentsScreen>
  );
};

const FeedWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Feed = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Contents = styled.div`
  font-size: 100px;
  padding: 30px;
  margin: 15px;
  border-radius: 100px;
  background-color: #fff;
  color: #000;
`;
export default About;
