import React from 'react'
import profilePhoto from '../assets/profilePhoto.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <section id='about' className='section'>
      <h2 className='section-title'>About Me</h2>
      <div className='about-content'>
        <div className='about-text'>
          <p>
            Hello! My name is Brajsundari Rathor and I enjoy creating things that live on the internet.
            My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes - turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p><br />
          <p>Fast-forward to today, and I've had the privilege of working at an advertising agency,
            a start-up, a huge corporation, and a student-led design studion.
          </p> <br />
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul style={{marginTop: '10px', marginLeft: '20px', columns: '2', listStyleType: 'none'}}>
          <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> JavaScript (ES6+)
            </li>
            <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> React
            </li>
            <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> Node.js
            </li>
            <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> TypeScript
            </li>
            <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> MongoDB
            </li>
            <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
              <span style={{ position: 'absolute', left: '0', color: '#64ffda' }}>▹</span> CSS/SASS
            </li>
          </ul>
        </div>
        <div className='about-image'>
          <img src={profilePhoto} alt="brajsundari rathor" />
        </div>
      </div>
    </section>
  )
}

export default About
