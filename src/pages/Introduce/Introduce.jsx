import SEO from 'components/SEO';
import ContentsScreen from 'layouts/ContentsScreen';

// SEO 생략함
const Introduce = () => {
  return (
    <ContentsScreen>
      <SEO
        fullTitle="thisishaneum®"
        description="If you want to know about Cha Haneum, click this link"
      />
    </ContentsScreen>
  );
};

export default Introduce;
