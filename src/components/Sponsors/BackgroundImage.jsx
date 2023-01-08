import styled from 'styled-components';

const BackgroundImage = () => {
  return (
    <Wrapper>
      <Img src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/795/b6618dc6ff90f3b556089067251185c3_res.jpeg"></Img>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
`;
export default BackgroundImage;
