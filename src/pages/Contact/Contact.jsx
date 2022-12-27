import Introduce from 'components/Contact/Introduce';
import EnterName from 'components/Contact/EnterName';
import { useRecoilValue } from 'recoil';
import pageCountState from 'states/Contact/pageCountState';
import EnterEmail from 'components/Contact/EnterEmail';
import EnterMessage from 'components/Contact/EnterMessage';
import FullScreen from 'layouts/FullScreen';
import SEO from 'components/SEO';

const Contact = () => {
  const count = useRecoilValue(pageCountState);

  return (
    <FullScreen>
      <SEO title="Contact" description="This is Cha Han-eum's resume" />
      {count === 0 ? (
        <Introduce />
      ) : count === 1 ? (
        <EnterName />
      ) : count === 2 ? (
        <EnterEmail />
      ) : count === 3 ? (
        <EnterMessage />
      ) : (
        'else! yet!' // error page / success page
      )}
    </FullScreen>
  );
};

export default Contact;
