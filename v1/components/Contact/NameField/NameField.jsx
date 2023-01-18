import FullScreen from 'layouts/FullScreen';
import { useRecoilState } from 'recoil';
import { nameState } from 'states/Contact/datasState';
import NameInput from 'components/Contact/NameField/NameInput';
import NameButton from 'components/Contact/NameField/NameButton';

const NameField = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <FullScreen>
      <NameInput
        value={name}
        setValue={setName}
        placeholder="Enter your name"
      />
      <NameButton value={name} />
    </FullScreen>
  );
};

export default NameField;
