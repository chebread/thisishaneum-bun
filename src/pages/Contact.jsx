import FullScreen from 'layouts/FullScreen';
import styled from 'styled-components';
import { sendForm } from '@emailjs/browser';

const Contact = () => {
  return (
    <FullScreen>
      <div>hello</div>
    </FullScreen>
  );
};
const Input = styled.input``;
export default Contact;

// const onSubmit = e => {
//   e.preventDefault();
//   sendForm(
//     'service_h2nw1tb',
//     'template_d3cf1o3',
//     form.current,
//     'xt2HABdpVLNHYTSZK'
//   ).then(
//     result => {
//       console.log(result.text);
//     },
//     error => {
//       console.log(error.text);
//     }
//   );
// };
