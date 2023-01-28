import ContactPanel from 'pages/Home/panels/ContactPanel';
import HorizontalScreen from 'components/Home/HorizontalScreen';

const Home = () => {
  return (
    <HorizontalScreen>
      <ContactPanel />
      <ContactPanel />
    </HorizontalScreen>
  );
};

export default Home;
