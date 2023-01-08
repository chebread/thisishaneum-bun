import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContentsScreen>
      <SEO title="Contact" description="This is Cha Han-eum's contact" />
      <Frame>
        <Wrapper>
          <Box>
            <Category>Name</Category>
            <Input />
          </Box>
        </Wrapper>
      </Frame>
    </ContentsScreen>
  );
};
const Frame = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Category = styled.div`
  font-size: 30px;
`;
const Input = styled.input`
  all: unset;
  height: 25px;
  width: 100%;
  backdrop-filter: blur(15px);
  background-color: #1e1e1e;
  border-radius: 40px;
  font-size: 40px;
  font-weight: 600;
  z-index: 1;
  padding: 30px;
`;
export default Contact;
