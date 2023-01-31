import FullScreen from 'layouts/Screens/FullScreen';
import styled from 'styled-components';

const ContactPanel = () => {
  return (
    <CenterScreen>
      <Wrapper>
        <Text>Let's work together</Text>
      </Wrapper>
      <Wrapper>
        <Button as="a" href="mailto:chahanm@proton.me">
          chahanm@proton.me
        </Button>
      </Wrapper>
    </CenterScreen>
  );
};

const CenterScreen = styled(FullScreen)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  // text 선택 금지
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81.25px;
`;
const Text = styled.div`
  font-size: 60px;
  font-weight: 800;
  mix-blend-mode: difference;
`;
const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  mix-blend-mode: difference;
  padding: 11px 21px 11px 21px;
  // border
  border: 1px solid #fff;
  border-radius: 500px;
  box-sizing: border-box;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  // animation
  transition: all 0.2s ease-out; // delay: 0s
  // svg
  svg {
    fill: #fff;
    height: 40px;
    width: 40px;
  }
`;
export default ContactPanel;
