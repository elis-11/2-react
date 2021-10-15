import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='item'>
        {/* <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> */}
        <NavLink to="/profile">Profile</NavLink>

      </div>
      <div className=''>
        <NavLink to="/dialogs">Message</NavLink>
      </div>
      <div className=''>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className=''>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className=''>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
