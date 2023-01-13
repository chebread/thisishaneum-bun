import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// (0): 이미지 지정하기
const SEO = ({ title, description, children, noTitle }) => {
  const url = useRef(window.location.href);
  const serviceName = useRef('thisishaneum®');
  const serviceTitle = useRef(`${title} - ${serviceName.current}`);
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{noTitle ? serviceName.current : serviceTitle.current}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.current} />
      {/* Facebook tags */}
      <meta property="og:image" content />
      {/* <meta property="og:url" content={url.current} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={isHome ? serviceName.current : serviceTitle.current}
      />
      <meta property="og:description" content={description} />
      {/* Twitter tags
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={isHome ? serviceName.current : serviceTitle.current}
      />
      <meta name="twitter:description" content={description} /> */}
      {children}
    </Helmet>
  );
};
export default SEO;
