import AboutScreen from 'components/About/AboutScreen';
import SvgJs from 'components/About/SvgJs';
import SvgReact from 'components/About/SvgReact';
import SvgVue from 'components/About/SvgVue';
import SvgRecoil from 'components/About/SvgRecoil';
import SvgAs from 'components/About/SvgAs';
import SEO from 'components/SEO';
import styled from 'styled-components';
import SvgBun from 'components/About/SvgBun';
import SvgCss from 'components/About/SvgCss';
import SvgHtml from 'components/About/SvgHtml';
import SvgSc from 'components/About/SvgSc';
import SvgFirebase from 'components/About/SvgFirebase';
import SvgRr from 'components/About/SvgRr';
import SvgMapbox from 'components/About/SvgMapbox';
import SvgWebpack from 'components/About/SvgWebpack';
import SvgBabel from 'components/About/SvgBabel';

const Tech = () => {
  return (
    <AboutScreen>
      <SEO
        title="Tech stack"
        description="If you are curious about the tech stack of Cha Haneum, click this link to check it out in detail"
      />
      {/* grid로 기술 배열하기 feed 형태로 */}
      <Wrapper>
        <ItemsWrapper>
          <Items color="#EFD81B">
            <SvgJs />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#00CCFF">
            <SvgReact />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#3678E5">
            <SvgRecoil />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#4FC08D">
            <SvgVue />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#fbf0df">
            <SvgBun />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#ff922b">
            <SvgAs />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#E34F26">
            <SvgHtml />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#2762e9">
            <SvgCss />
          </Items>
        </ItemsWrapper>
        {/* <ItemsWrapper>
          <Items color="#CA4245">
            <SvgRr />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#FFCA28">
            <SvgFirebase />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#e6e6e6">
            <SvgMapbox />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#8DD6F9">
            <SvgWebpack />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#F9DC3E">
            <SvgBabel />
          </Items>
        </ItemsWrapper>
        <ItemsWrapper>
          <Items color="#DB7093">
            <SvgSc />
          </Items>
        </ItemsWrapper> */}
      </Wrapper>
    </AboutScreen>
  );
};
const ItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  // else
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
`;
const Items = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 125px;
    width: 125px;
    fill: #000;
  }
`;
export default Tech;
