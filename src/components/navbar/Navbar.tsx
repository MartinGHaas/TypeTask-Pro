import { Link, NavLink } from 'react-router-dom';
import NavItem from '../navItem/NavItem';
import './navbar.scss';
import { TiCogOutline, TiFolderOpen, TiHome } from 'react-icons/ti';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { FaRegBell } from 'react-icons/fa';

const Navbar = () => {
  const pages = [
    { path: '/', icon: <TiHome /> },
    { path: '/projects', icon: <TiFolderOpen /> },
    { path: '/teams', icon: <AiOutlineTeam /> },
    { path: '/tasks', icon: <HiOutlineClipboardDocumentList /> },
    { path: '/notifications', icon: <FaRegBell /> },
    { path: '/config', icon: <TiCogOutline /> },
  ]

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo-icon' src="logo.svg" alt="TypeTask Pro Logo" />
      </Link>
      <nav>
        {pages.map(page => (
          <NavLink to={page.path} className={({ isActive }) => isActive ? 'active-item' : ''} caseSensitive>
            <NavItem>
              {page.icon}
            </NavItem>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar;