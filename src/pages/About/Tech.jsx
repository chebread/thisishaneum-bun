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
