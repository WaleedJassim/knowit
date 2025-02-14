import { Outlet } from 'react-router';
import Footer from '~/components/shared/footer';
import Navbar from '~/components/shared/navbar';

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
