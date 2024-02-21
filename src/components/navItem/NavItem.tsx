import { ReactNode } from 'react';
import './navItem.scss';

type NavItemProps = {
  children: ReactNode
}

const NavItem = ({ children }: NavItemProps) => {
  return (
    <div className={'nav-item'}>
      {children}
    </div>
  )
}

export default NavItem;