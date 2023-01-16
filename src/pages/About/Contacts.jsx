import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Contacts = () => {
  return (
    <AboutScreen>
      <SEO
        title="Contact"
        description="If you are curious about the contact information of Cha Haneum, click this link to check it out in detail"
      />
      <Wrapper>
        <LinksWrapper>
          <Links
            rel="noopener noreferrer"
            target="_blank"
            href="https://velog.io/@haneum"
          >
            Blog
          </Links>
        </LinksWrapper>
        <LinksWrapper>
          <Links
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread"
          >
            GitHub
          </Links>
        </LinksWrapper>
        <LinksWrapper>
          <Links
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:c@thisishaneum.com"
          >
            Email
          </Links>
        </LinksWrapper>
        <LinksWrapper>
          <Links
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/cha-haneum-9457a7237/"
          >
            LinkedIn
          </Links>
        </LinksWrapper>
        <LinksWrapper>
          <Links
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/whyeveriwantu"
          >
            Instagram
          </Links>
        </LinksWrapper>
      </Wrapper>
    </AboutScreen>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22.5px;
  min-width: calc(100% - 60px);
  min-height: calc(100% - 60px);
  padding: 30px;
`;
const LinksWrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Links = styled.a`
  all: unset;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  height: 75px;
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border-radius: 35px;
  background-color: rgba(30, 27, 22, 75%);
  &:hover {
    background-color: rgba(40, 36, 32, 75%);
    height: 77.5px;
    font-size: 34.5px;
    width: 674.75px;
  }
  &:active {
    background-color: rgba(49, 43, 37, 75%);
    height: 75px;
    width: 650px;
    font-size: 32px;
  }
`;
export default Contacts;
