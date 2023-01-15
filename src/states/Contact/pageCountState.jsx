import { atom } from 'recoil';

const pageCountState = atom({
  key: 'pageCountState',
  default: 3,
});

export default pageCountState;
