import AwardsBadge from 'components/Home/AwardsBadge';
import HorizontalScreen from 'components/Home/HorizontalScreen';
import AboutPanel from 'pages/Home/panels/AboutPanel';
import ContactPanel from 'pages/Home/panels/ContactPanel';

const Home = () => {
  return (
    <>
      <AwardsBadge />
      <HorizontalScreen>
        <ContactPanel />
        <AboutPanel />
      </HorizontalScreen>
    </>
  );
};

export default Home;
