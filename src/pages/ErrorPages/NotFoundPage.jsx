import ErrorPage from 'components/ErrorPages';
import SEO from 'components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="This page cannot be found"
        description="this page is not provided by thisishaneum"
      />
      <ErrorPage errorCode={404} />
    </>
  );
};

export default NotFoundPage;
