import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <nav className={s.navigation}>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={s.mainSection}>
        <div className={s.container}>
          <Outlet />
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default Layout;
