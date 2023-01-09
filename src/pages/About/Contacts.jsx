import AboutScreen from 'components/About/AboutScreen';
import SEO from 'components/SEO';
import styled from 'styled-components';

const Contacts = () => {
  return (
    <AboutScreen>
      <SEO
        title="Contact"
        description="If you are curious about the contact information of Cha Haneum, click this link to check it out in detail"
      />
      <Wrapper>
        <ItemsWrapper>
          <Items
            as="a"
            rel="noopener noreferrer"
            href="https://velog.io/@haneum/"
            target="_blank"
          >
            <Category>Blog</Category>
            <Item>@haneum</Item>
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chebread/"
          >
            <Category>GitHub</Category>
            <Item>@chebread</Item>
          </Items>
          <Line />
          <Items
            as="a"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/cha-haneum-9457a7237/"
            target="_blank"
          >
            <Category>LinkedIn</Category>
            <Item>Cha Haneum</Item>
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
const Item = styled.div`
  padding: 20px 0 20px 0;
  width: 50%;
`;
export default Contacts;
