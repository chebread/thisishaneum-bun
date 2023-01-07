import Router from 'components/Router/Router';
import SEO from 'components/SEO';
import FullScreen from 'layouts/FullScreen';
import IcoFavicon from 'assets/favicon.ico';
import SvgFavicon from 'assets/favicon.svg';

const App = () => {
  return (
    <FullScreen>
      <SEO
        title="This is the introduction page of Cha Haneum"
        description="If you want to know about Cha Haneum, click this link"
      >
        <link rel="shortcut icon" type="image/x-icon" href={IcoFavicon} />
        <link rel="icon" type="image/svg+xml" href={SvgFavicon} />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: ligth)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000000"
        />
      </SEO>
      <Router />
    </FullScreen>
  );
};

export default App;
