import './navItem.scss';

type NavItemProps = {
  src: string;
  alt: string;
  active?: boolean;
}

const NavItem = ({ src, alt, active }: NavItemProps) => {
  return (
    <div className={`nav-item ${active ? 'active-item' : ''}`}>
      <img className='item-svg' src={src} alt={alt} />
    </div>
  )
}

export default NavItem;