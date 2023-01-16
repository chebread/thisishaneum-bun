import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import FullScreen from 'layouts/FullScreen';
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
            <Category>2022 KCF Hackathon</Category>
            <Contents>동상 (M25)</Contents>
          </Items>
          <Line />
          <Items>
            <Category>2021 공개SW개발자대회</Category>
            <Contents>조직원상</Contents>
          </Items>
          <Line />
        </ItemsWrapper>
      </Wrapper>
    </AboutScreen>
  );
};

const Line = styled.div`
  min-height: 2.5px;
  background-color: dimgray;
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
  width: 100%;
  margin: 20px 40px 0 40px;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 50px;
  &:hover {
    background-color: rgb(30, 30, 30);
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
