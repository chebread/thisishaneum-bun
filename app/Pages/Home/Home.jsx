import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styled from 'styled-components';

const Home = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = useRef({ damping: 15, mass: 1, stiffness: 50 }); // 물리 설정
  const spring = useSpring(transform, physics.current);

  const onResize = useCallback(entries => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  return (
    <>
      <PanelsWrapper>
        <Panels ref={scrollRef} style={{ x: spring }}>
          <Panel>a</Panel>
          <Panel>b</Panel>
          <Panel>c</Panel>
        </Panels>
      </PanelsWrapper>
      <GhostWrapper ref={ghostRef} style={{ height: scrollRange }} />
    </>
  );
};

export default Home;

const GhostWrapper = styled.div`
  width: 100%;
  height: 100%;
  // safari scroll bounce 관성 막기
`;
const PanelsWrapper = styled.div`
  position: fixed;
  will-change: transform;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
`;
const Panels = styled(motion.section)`
  display: flex;
  height: 100%;
  width: max-content;
`;
const Panel = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
