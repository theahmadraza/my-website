import React from 'react';
import "./Contact.css"
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import DuoIcon from '@mui/icons-material/Duo';

function Contact() {
  return (
  <div className='contact'>
      <div className='call'>
         <CallIcon className='call1' />
         <h2>For Call</h2>
         <h4>+92 302 4928454</h4>
      </div>
      <div className='email'>
        <MailIcon className='mail1'/>
        <h2>For Email</h2>
         <h4>csmirza11@gmail.com</h4>
      </div>
      <div className='duo'>
      <DuoIcon className='duo1'/>
      <h2>For Meeting</h2>
         <h4>+92 313 0004271</h4>
      </div>
  </div>
  );
}

export default Contact;
