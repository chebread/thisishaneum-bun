import ContentsScreen from 'layouts/ContentsScreen';
import FooterButton from 'layouts/FooterButton';
import FooterScreen from 'layouts/FooterScreen';
import styled from 'styled-components';

const NameField = () => {
  return (
    <Screen>
      <Input />
    </Screen>
  );
};
const Screen = styled(ContentsScreen)`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  height: 75px;
  width: 50%;
  background-color: rgba(30, 27, 22, 80%);
  border-radius: 30px;
  font-size: 50px;
`;
export default NameField;
