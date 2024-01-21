import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <> 
      <nav className="navContainer aboutNav">
        <ul className='aboutNavMenu'>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/testimonial'>Testimonial</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <img src='/images/secPoster.png' alt='poster' className='aboutPoster' />
      <div className="aboutContainer"><img src='/images/About.png' alt='poster' className='aboutImg' /></div>
      <div className="aboutTextCont">
        <h1>About Us</h1>
        <h2>Food Is An Important Part Of A Balanced Diet</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut tempora consectetur. Nam esse qui consequatur minus neque fugit est commodi praesentium! Cum alias assumenda quia illo hic facilis explicabo consequuntur, inventore accusantium soluta.</p>
        <div className='aboutBtn'>Learn More</div>
      </div>
    </>
  )
}

export default About
