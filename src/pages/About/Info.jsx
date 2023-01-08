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
      <TableWrapper>
        <Table>
          <Items>
            <ContentWrapper>
              <Content>Name</Content>
              <Content>Cha Haneum@icloudc.om</Content>
            </ContentWrapper>
          </Items>
          <Items>
            <ContentWrapper>
              <Content>Birth.</Content>
              <Content>2008.3.20</Content>
            </ContentWrapper>
          </Items>
        </Table>
      </TableWrapper>
    </AboutScreen>
  );
};
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Hr = styled.hr`
  width: 100%;
  border: 1px solid #fff;
`;
const Table = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;
const Items = styled.div``;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content = styled.div`
  width: 50%;
  font-size: 50px;
  word-wrap: break-word;
`;

export default Info;
