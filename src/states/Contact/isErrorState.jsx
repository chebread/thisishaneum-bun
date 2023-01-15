import { atom } from 'recoil';

const isErrorState = atom({
  key: 'isErrorState',
  default: false,
});

export default isErrorState;
