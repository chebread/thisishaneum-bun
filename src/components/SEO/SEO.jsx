import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// (0): 이미지 지정하기
const SEO = ({ fullTitle, title, description, children }) => {
  const url = useRef(window.location.href);
  const isFullTitle = useRef(fullTitle ? true : false);
  const serviceName = useRef('thisishaneum®');
  const serviceTitle = useRef(`${title} - ${serviceName.current}`);

  return (
    <Helmet>
      <title>{isFullTitle.current ? fullTitle : serviceTitle.current}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.current} />
      <meta property="og:image" content />
      {children}
    </Helmet>
  );
};
export default SEO;
