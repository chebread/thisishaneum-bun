import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, children }) => {
  const url = useRef(window.location.href);
  const serviceName = useRef('thisishaneum®');

  return (
    <Helmet>
      {children}
      {/* Standard metadata tags */}
      <title>
        {title} - {serviceName.current}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.current} />
      {/* Facebook tags */}
      <meta property="og:url" content={url.current} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - ${serviceName.current}`} />
      <meta property="og:description" content={description} />
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={`${title} - ${serviceName.current}`}
      />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
export default SEO;
