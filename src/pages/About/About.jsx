import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

const About = () => {
  return (
    <FullScreen>
      <Wrapper>
        <StackWrapper>
          <Stack>Tech stack</Stack>
        </StackWrapper>
        <StackWrapper>
          <Stack>Information</Stack>
        </StackWrapper>
        <StackWrapper>
          <Stack>Contact</Stack>
        </StackWrapper>
        <StackWrapper>
          <Stack>Careers</Stack>
        </StackWrapper>
        <StackWrapper>
          <Stack>Projects</Stack>
        </StackWrapper>
      </Wrapper>
    </FullScreen>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  background-color: #07ee00;
  margin: 20px;
  color: black;
  font-size: 120px;
  border-radius: 50px;
`;
const Stack = styled.div`
  padding: 30px;
`;
export default About;
