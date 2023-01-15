import { atom } from 'recoil';

const pageCountState = atom({
  key: 'pageCountState',
  default: 0,
});

export default pageCountState;
