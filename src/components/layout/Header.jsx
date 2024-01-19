import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='container flex between item-center'>
      <a className='logo' href='#'>
        <h2>Logo</h2>
      </a>
      <nav className='flex'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/posts'}>Our posts</NavLink>
        <NavLink to={'/add-post'}>Create post</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>
    </header>
  );
}
