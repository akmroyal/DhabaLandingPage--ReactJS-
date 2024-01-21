import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navContainer">
      <div className="logo">
        <img src="/images/home.png" alt="logo" className="posterImage" />
      </div>
      <ul>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/testimonial'>Testimonial</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <button className="navBtn">login</button>
    </nav>
  );
};

export default Navigation;