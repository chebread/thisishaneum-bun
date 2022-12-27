import { atom } from 'recoil';

const pageCountState = atom({
  key: 'pageCountState',
  default: 1,
});

export default pageCountState;
