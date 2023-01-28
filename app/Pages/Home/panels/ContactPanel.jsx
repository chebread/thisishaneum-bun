import FullScreen from 'layouts/Screens/FullScreen';

import styled from 'styled-components';

const ContactPanel = () => {
  return (
    <CenterScreen>
      hello
      {/* <Wrapper>
        <Text>Let's work together</Text>
      </Wrapper>
      <Wrapper>
        <Button onClick={() => refreshPage()}>chahanm@proton.me</Button>
      </Wrapper> */}
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
  // guide
  height: 81.25px;
`;
const Text = styled.div`
  font-size: 60px;
  font-weight: 800;
`;
const Button = styled.button`
  all: unset;
  font-size: 30px;
  font-weight: 400;
  padding: 11px 21px 11px 21px;
  border-radius: 500px;
  border: 1px solid #fff;
  &:hover {
    border: 5px solid #fff;
  }
  box-sizing: border-box;
`;
export default ContactPanel;
