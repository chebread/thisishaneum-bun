import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Children, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
gsap.registerPlugin(ScrollTrigger);

const Home = ({ children }) => {
  const panelRef = useRef([]);
  const containerRef = useRef(null);

  const createPanelsRefs = () => {
    let index = -1;
    const f = panel => {
      index++;
      panelRef.current[index] = panel;
    };
    return f;
  };
  const create = createPanelsRefs();
  useLayoutEffect(() => {
    gsap.to(panelRef.current, {
      ease: 'none',
      xPercent: -100 * (panelRef.current.length - 1),
      scrollTrigger: {
        end: () => '+=' + containerRef.current.offsetWidth * 2, // containerRef.current.offsetWidth,
        // 스크롤 조절하기
        trigger: containerRef.current,
        pin: true, // (0): resize 버벅거림 해결하기
        scrub: 0.5,
        snap: 0,
      },
    });
    ScrollTrigger.normalizeScroll(true); // 일단은 허용한다.
  }, []);

  return (
    <Container ref={containerRef}>
      {Children.toArray(children).map((element, index) => (
        // 그냥 children 접근시 오류 발생함. Array로서 접근한다.
        <div ref={create} key={index}>
          {element}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overscroll-behavior: none;
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: row;
`;

export default Home;
