import Router from 'components/Router/Router';
import FullScreen from 'layouts/FullScreen';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <FullScreen>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2829454818558499"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Router />
    </FullScreen>
  );
};

export default App;
