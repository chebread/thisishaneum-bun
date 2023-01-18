import Screen from 'layouts/Screen';
import Router from 'components/Router/Router';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <Screen>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2829454818558499"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Router />
    </Screen>
  );
};

export default App;
