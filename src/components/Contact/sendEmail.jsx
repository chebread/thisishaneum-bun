import { send } from '@emailjs/browser';

const sendEmail = async ({ name, email, message }) => {
  await send(
    'service_h2nw1tb',
    'template_d3cf1o3',
    {
      name: name,
      email: email,
      message: message,
    },
    'xt2HABdpVLNHYTSZK'
  );
};

export default sendEmail;
