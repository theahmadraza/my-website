import React from 'react';
import './SocialLinks.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



function SocialLinks() {
  return (
    
  <div className='container'>
      <div className='socialLinks'>
      <div className='social'>
      <FacebookIcon className='facebook' />
      </div>
      <div className='social'>
      <TwitterIcon className='twitter'/>
      </div>
      <div className='social'>
      <LinkedInIcon className='linkedin'/>
      </div>
      <div className='social'>
      <GitHubIcon className='github'/>
      </div>
      <div className='social'>
      <MailIcon className='mail'/>
      </div>
      </div>
      <div className='divider'>
      <Divider>
    <Chip label="Go Ahead" />
  </Divider>
  </div>
  </div>
  );
}

export default SocialLinks;
