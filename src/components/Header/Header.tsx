import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='justify-content-center d-flex'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand' >Todos</Link>
        <Link to='/deleted-todo' className='navbar-brand'>Deleted Todos</Link>
      </nav>
    </header>
  );
}

export default Header;