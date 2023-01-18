import { atom } from 'recoil';

const serviceNameState = atom({
  key: 'serviceNameState',
  default: 'thisishaneum®',
});

export default serviceNameState;
