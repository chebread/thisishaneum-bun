import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';
import GoButton from './GoButton';

const ErrorPage = ({ errorCode }) => {
  return (
    <FullScreen>
      <CenterScreen>
        <ErrorCode>{errorCode}</ErrorCode>
      </CenterScreen>
      <GoButton />
    </FullScreen>
  );
};

const ErrorCode = styled.div`
  font-weight: 600;
  font-size: 100px;
`;
const CenterScreen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
export default ErrorPage;
