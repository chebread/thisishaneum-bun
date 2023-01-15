import FullScreen from 'layouts/FullScreen';
import SEO from 'components/SEO';
import ContactIntroduce from 'components/Contact/ContactIntroduce';
import NameField from 'components/Contact/NameField';
import EmailField from 'components/Contact/EmailField';
import MessageField from 'components/Contact/MessageField';
import { useRecoilValue } from 'recoil';
import pageCountState from 'states/Contact/pageCountState';

const Contact = () => {
  const count = useRecoilValue(pageCountState);
  return (
    <FullScreen>
      <SEO title="Contact" description="This is Cha Han-eum's resume" />
      {count === 0 ? ( // count 3이후에는 0으로 다시 돌아온다
        <ContactIntroduce />
      ) : count === 1 ? (
        <NameField />
      ) : count === 2 ? (
        <EmailField />
      ) : count === 3 ? (
        <MessageField />
      ) : (
        ''
      )}
    </FullScreen>
  );
};

export default Contact;
