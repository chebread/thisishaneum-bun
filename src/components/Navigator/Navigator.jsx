import { useState } from 'react';
import ShowButton from 'components/Navigator/ShowButton';
import NavLinks from 'components/Navigator/NavLinks';

const Navigator = () => {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick(true);
    document.body.style.overflow = 'hidden'; // 전역으로 해야 설정 됨
  };
  const onUnClick = () => {
    setIsClick(false);
    document.body.style.removeProperty('overflow');
  };

  return isClick ? (
    <>
      <NavLinks onClick={onUnClick} isClick={isClick} />
    </>
  ) : (
    <ShowButton onClick={onClick} isClick={isClick} />
  );
};

export default Navigator;
