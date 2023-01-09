import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Careers = () => {
  return (
    <AboutScreen>
      <SEO
        title="Projects"
        description="If you are curious about Cha Haneum's projects, click this link to check it out in detail"
      />
      <Wrapper>
        <ItemsWrapper>
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/thisishaneum"
          >
            thisishaneum
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/sajin"
          >
            sajin
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/treshe"
          >
            treshe
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/hammke"
          >
            hamkke
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/gatchy"
          >
            gatchy
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/ft"
          >
            ft
          </Items>
          <Line />
        </ItemsWrapper>
      </Wrapper>
    </AboutScreen>
  );
};

const Line = styled.div`
  min-height: 3px;
  background-color: rgb(60, 60, 60); ;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 15px;
`;
const Items = styled.div`
  all: unset;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 45px;
  &:hover {
    background-color: rgb(30, 30, 30);
    border-radius: 30px;
  }
  padding: 20px 0 20px 0;
  word-wrap: break-word;
`;
export default Careers;
