import SEO from 'components/SEO';
import Background from 'components/Sponsors/Background';
import ContentsScreen from 'layouts/ContentsScreen';
import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';

// SEO 생략함
const Introduce = () => {
  return (
    <FullScreen>
      <SEO
        fullTitle="thisishaneum®"
        description="If you want to know about Cha Haneum, click this link"
      />
      <Video autoPlay muted loop>
        <source src="http://www.helloabt.com/img/home.mp4" />
      </Video>
    </FullScreen>
  );
};
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export default Introduce;
