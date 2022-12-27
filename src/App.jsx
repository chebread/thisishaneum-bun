import Header from 'Header';
import Navigator from 'components/Navigator';
import Router from 'components/Router/Router';
import SEO from 'components/SEO';
import FullScreen from 'layouts/FullScreen';

const App = () => {
  return (
    <FullScreen>
      <SEO
        title="This is the introduction page of Cha Haneum"
        description="If you want to know about Cha Haneum, click this link"
      />
      <Router>
        <Header />
        {/* <Navigator /> */}
      </Router>
    </FullScreen>
  );
};

export default App;
