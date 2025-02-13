import { Outlet } from 'react-router';
import Navbar from '~/components/shared/navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
