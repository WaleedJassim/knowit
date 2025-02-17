import { Outlet } from 'react-router';
import Footer from '~/components/shared/footer';
import Navbar from '~/components/shared/navbar';

const Layout = () => {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
