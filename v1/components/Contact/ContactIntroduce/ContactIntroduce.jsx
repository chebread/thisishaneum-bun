import StartButton from 'components/Contact/ContactIntroduce/StartButton';
import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

const ContactIntroduce = () => {
  return (
    <FullScreen>
      <Wrapper>
        <Box>
          <P>Contact me here with any</P>
          <P>questions or suggestions</P>
        </Box>
      </Wrapper>
      <StartButton />
    </FullScreen>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 30px);
  width: 100%;
  font-size: 50px;
  font-weight: 800;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.div``;
export default ContactIntroduce;
