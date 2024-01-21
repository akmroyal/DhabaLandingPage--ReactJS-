import React from 'react'
import { Link } from 'react-router-dom'
const Testimonial = () => {
  let mystyle = {
    width: 45 + 'rem',
    margin: 'auto',
    textAlign:'center',
    backgroundColor: '#e9e7e7b0',
  }
  return (
    <div>
      <nav className="navContainer contactNav">
        <ul>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/testimonial'>Testimonial</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <div className='textTestCont'>
        <h2>Testimonial</h2>
        <h1>What They Are Saying</h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae, <br/>voluptatem dolorum maiores exercitationem atque omnis quod <br/>sunt quis nihil totam sed?</h6>
      </div>

      <div className="card testCard" style={mystyle}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxoOGOgrf6j8wBO_t92ryv2tnseAPM78vFw&usqp=CAU" className="card-img-top testerImage" alt="Img" />
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt debitis molestiae eius! sjfdf df modld f dfdof od dodjfo dfelsp ksdifiwk</p>
          <div className="ratingTester">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70833 36.6667L12.4167 24.9583L3.33333 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70833 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70833 36.6667L12.4167 24.9583L3.33333 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70833 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70833 36.6667L12.4167 24.9583L3.33333 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70833 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70833 36.6667L12.4167 24.9583L3.33333 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70833 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70833 36.6667L12.4167 24.9583L3.33333 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70833 36.6667Z" fill="#FE9E0D" />
            </svg>
          </div>
          <h3 className="testName">Ashu maurya</h3>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
