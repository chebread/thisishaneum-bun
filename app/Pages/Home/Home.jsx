import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const panelRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray('.panel');
    gsap.to(sections, {
      xPercent: -100 * 2,
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: '+=3000',
      },
    });
  }, []);

  return (
    <Container ref={containerRef}>
      <Panel className="panel">ONE</Panel>
      <Panel className="panel">TWO</Panel>
      <Panel className="panel">THREE</Panel>
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
const Panel = styled.div`
  height: 100%;
  width: 90vw;
  background-color: #000;
`;

export default Home;
