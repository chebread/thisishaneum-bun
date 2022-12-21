import ErrorPage from 'components/ErrorPages';

const ServiceUnavailable = () => {
  return <ErrorPage errorCode={503} />;
};

export default ServiceUnavailable;
