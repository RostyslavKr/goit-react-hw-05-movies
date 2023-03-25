import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Link } from './App.syled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
