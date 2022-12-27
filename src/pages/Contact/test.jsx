<PhrasesWrapper>
  <Phrases>Enter your name</Phrases>
</PhrasesWrapper>;

const PhrasesWrapper = styled.div`
  position: absolute;
  height: calc(50% - 30px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Phrases = styled.div`
  font-size: 45px;
  font-weight: 600;
  z-index: 1;
  backdrop-filter: blur(15px);
  background-color: rgba(30, 30, 30, 100%);
  &:hover {
    background-color: rgba(40, 40, 40, 100%);
  }
  &:active {
    background-color: rgba(50, 50, 50, 100%);
  }
  padding: 30px;
  border-radius: 40px;
`;

const onSubmit = async () => {
  const isComplete = name != null && email != null && msg != null;
  if (isComplete) {
    await sendEmail({ name: name, email: email, message: msg }).catch(err => {
      navigate('503');
    });
  }
};
