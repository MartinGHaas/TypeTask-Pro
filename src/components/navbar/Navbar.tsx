import { Link, NavLink } from 'react-router-dom';
import NavItem from '../navItem/NavItem';
import './navbar.scss';

const Navbar = () => {
  const pages = [
    { path: '/', img: 'home-icon.svg' },
    { path: '/projects', img: 'projects-icon.svg' },
    { path: '/teams', img: 'teams-icon.svg' },
    { path: '/tasks', img: 'tasks-icon.svg' },
    { path: '/notifications', img: 'notifications-icon.svg' },
    { path: '/config', img: 'config-icon.svg' },
  ]

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo-icon' src="logo.svg" alt="TypeTask Pro Logo" />
      </Link>
      <nav>
        {pages.map(page => (
          <NavLink to={page.path} className={({ isActive }) => isActive ? 'active-item' : ''} caseSensitive>
            <NavItem alt='' src={page.img} />
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar;