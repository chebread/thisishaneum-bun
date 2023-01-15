import { atom } from 'recoil';

const serviceNameState = atom({
  key: 'goPage',
  default: 'thisishaneum®',
});

export default serviceNameState;
