import FullScreen from 'layouts/FullScreen';
import HeaderScreen from 'layouts/HeaderScreen';
import styled from 'styled-components';

const AboutHeader = () => {
  return (
    <div>
      <Wrapper>
        <ButtonWrapper>
          <Header>
            <Items>Tech stack</Items>
            <Items>Information</Items>
            <Items>Contact</Items>
            <Items>Careers</Items>
            <Items>Projects</Items>
          </Header>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  position: absolute;
  padding-top: 50px;
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(10, 10, 10, 15%); // 12.5
  backdrop-filter: blur(5px);
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Items = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  height: 50px;
  padding: 0 15px 0 15px;
  margin: 5px;
  border-radius: 500px;
  background-color: rgb(30, 30, 30, 80%);
  backdrop-filter: blur(15px);
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AboutHeader;
