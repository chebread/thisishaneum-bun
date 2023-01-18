import { atom } from 'recoil';

const nameState = atom({
  key: 'nameState',
  default: '',
});
const emailState = atom({
  key: 'emailState',
  default: '',
});
const messageState = atom({
  key: 'messageState',
  default: '',
});
export { nameState, emailState, messageState };
