import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import serviceNameState from 'states/Contact/serviceNameState';
import { useRecoilValue } from 'recoil';

// (0): 이미지 지정하기
const SEO = ({ fullTitle, title, description, children }) => {
  const url = useRef(window.location.href);
  const isFullTitle = useRef(fullTitle ? true : false);
  const serviceName = useRecoilValue(serviceNameState);
  const serviceTitle = useRef(`${title} - ${serviceName}`);

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
