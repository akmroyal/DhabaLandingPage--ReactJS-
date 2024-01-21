import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <nav className="navContainer contactNav">
        <ul>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/testimonial'>Testimonial</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <div className="contactCont">
        <div className="bodyContact container my-5">
          <h1>Have Question In Mind?<br/>
            Let Us Help You</h1>
          <div class="input-group mb-3 emailContact">
            <input type="text" className="form-control" placeholder="Custmer's email" aria-label="Custmer's email" aria-describedby="basic-addon2" />
            <span class="input-group-text btnContact" id="basic-addon2">Check Me</span>
          </div>
        </div>
        <div className="footerContact">
          <div><h1 className='logoName'>FOODIE</h1></div>
          <div className="linkContact">
            <ul>
              <li>Quality</li>
              <li>Help</li>
              <li>Share</li>
              <li>Carrers</li>
              <li>Work</li>
              <li>Testimonials</li>
            </ul>
            <ul>
              <li>928-3203-2322</li>
              <li>hello@food.com</li>
              <li>press@food.com</li>
              <li>contactus@food.com</li>
            </ul>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
