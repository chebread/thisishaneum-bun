import ErrorPage from 'components/ErrorPages';
import SEO from 'components/SEO';

const ServiceUnavailable = () => {
  return (
    <>
      <SEO
        title="The server could not process the request"
        description="An error occurred while the server was processing the request."
      />
      <ErrorPage errorCode={503} />
    </>
  );
};

export default ServiceUnavailable;
