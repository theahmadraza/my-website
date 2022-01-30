import React from 'react';
import './About.css'
import aboutImage from '../../extra/images/profile.JPG'
import Button from '@mui/material/Button';


function About() {
  return (
    <div className="about">
      <h1>Who I Am?</h1>
      <div className="about__image">
        <img src={aboutImage} alt="profileImage" />
      </div>
      <div className="about__content">
        <div className="about__content-intro">
        <h2>About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </p>
        {/* <Button variant="outlined">Know More</Button> */}
      </div>
      <div className="about__content-skill">
      <h2>Skills I have</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </p>
      </div>
      </div>
    </div>
  );
}



export default About;
