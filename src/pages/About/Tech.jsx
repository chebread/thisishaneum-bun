import AboutScreen from 'components/About/AboutScreen';
import SvgJs from 'components/About/SvgJs';
import SvgReact from 'components/About/SvgReact';
import SvgSc from 'components/About/SvgSc';
import SvgVue from 'components/About/SvgVue';
import SvgRecoil from 'components/About/SvgRecoil';
import SvgWebpack from 'components/About/SvgWebpack';
import SvgBabel from 'components/About/SvgBabel';
import SEO from 'components/SEO';
import styled from 'styled-components';

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
          <Items color="#DB7093">
            <SvgSc />
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
  grid-template-columns: repeat(5, 1fr);
  // 한줄에 아이템을 3개로만 하고 그 길이는 1:1:1로 한다
  // minmax(200px, auto) 최소는 200px만, 더 늘어나면 auto로 그냥 늘어나라
  grid-template-rows: repeat(2, 1fr); // 한 열에 아이템을 2개만 나열한다
  gap: 10px;
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
    height: 40%;
    width: 40%;
    fill: #000;
  }
  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(70%);
    height: 95%;
    width: 95%;
  }
  z-index: 1;
`;
export default Tech;
