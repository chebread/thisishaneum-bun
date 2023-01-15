import FullScreen from 'layouts/FullScreen';
import { useRecoilState } from 'recoil';
import { nameState } from 'states/Contact/datasState';
import NameInput from './NameInput';
import NextButton from '../NextButton';

const NameField = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <FullScreen>
      <NameInput
        value={name}
        setValue={setName}
        placeholder="Enter your name"
      />
      <NextButton value={name} />
    </FullScreen>
  );
};

export default NameField;
