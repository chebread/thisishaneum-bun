import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';
import PDF_22_KCF from 'assets/files/22_KCF.pdf';
import PDF_21_OSS from 'assets/files/21_OSS.pdf';

const Careers = () => {
  return (
    <AboutScreen>
      <SEO
        title="Careers"
        description="If you are curious about the careers of Cha Haneum, click this link to check it out in detail"
      />
      <Wrapper>
        <ItemsWrapper>
          <Items
            as="a"
            href={PDF_22_KCF}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Category>2022 KCF Hackathon</Category>
            <Contents>동상 (M25)</Contents>
          </Items>
          <Line />
          <Items
            as="a"
            href={PDF_21_OSS}
            rel="noopener noreferrer"
            target="_blank"
          >
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
export default Careers;
