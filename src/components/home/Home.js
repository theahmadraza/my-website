import React from 'react';
import Profile from '../../extra/images/profile.JPG'
import "./Home.css"
import TypeWriterEffect from 'react-typewriter-effect';



function Home() {
  return (
  <div className='home'>
      <div className='home__profileImage'>
        <img src={Profile} alt='myImage'/>
      </div>
      <div className='home__text'>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'serif Pro',
          color: 'Black',
          fontWeight: 700,
          fontSize: '2em',
        }}
        
        cursorColor="Blue"
        multiText={[
          'I am Muhammad Ahmad',
          'I am Programmer...',
          'I am Web Developer...',
          'I am ML Enthusiast...',
        ]}
        multiTextDelay={1000}
        typeSpeed={90}
      />
          <p>Web Developer | Programmer | ML Enthusiast</p>
      </div>
  </div>
  );
}

export default Home;
