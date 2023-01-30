import FullScreen from 'layouts/Screens/FullScreen';
import React from 'react';
import styled from 'styled-components';

const AboutPanel = () => {
  return <Screen>{React.version}</Screen>;
};

const Screen = styled(FullScreen)``;
export default AboutPanel;
