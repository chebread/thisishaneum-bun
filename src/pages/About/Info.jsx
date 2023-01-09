import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Info = () => {
  return (
    <AboutScreen>
      <SEO
        title="Information"
        description="If you are curious about the information of Cha Haneum, click this link to check it out in detail"
      />
      <Wrapper>
        <ItemsWrapper>
          <Items>
            <Category>Name</Category>
            <Contents>Cha Haneum</Contents>
          </Items>
          <Line />
          <Items>
            <Category>Birth.</Category>
            <Contents>2008.03.20</Contents>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 45px;
  &:hover {
    background-color: rgb(30, 30, 30);
    border-radius: 30px;
  }
  word-wrap: break-word;
`;
const Category = styled.div`
  width: 50%;
  padding: 20px 0 20px 0;
`;
const Contents = styled.div`
  padding: 20px 0 20px 0;
  width: 50%;
`;
export default Info;
