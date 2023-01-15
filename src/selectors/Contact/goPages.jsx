import { selector } from 'recoil';
import pageCountState from 'states/Contact/pageCountState';

const goPages = selector({
  key: 'goPages',
  get: ({ get }) => {
    return get(pageCountState);
  },
  set: ({ set, get }, newValue) => {
    if (newValue >= 0) {
      if (get(pageCountState) + 1 >= 4) {
        set(pageCountState, 0); // 값이 커지면 청므으로 이동
      } else {
        set(pageCountState, get(pageCountState) + 1); // 다음 페이지로 이동
      }
    } else {
      if (get(pageCountState) === 0) {
        set(pageCountState, 0);
      } else {
        set(pageCountState, get(pageCountState) - 1); // 뒷 페이지로 이동
      }
    }
  },
});

export default goPages;
