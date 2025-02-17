import { NavLink } from 'react-router';
import Logo from '~/assets/images/knowit-white.png';
import { Button } from '~/components/ui/button';
import { links, type Link } from '~/lib/constants';

const Navbar = () => {
	return (
		<div className="p-6 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 bg-white-4 backdrop-blur-3xl">
			<img src={Logo} alt="Knowit" className="w-32" />
			<div className="flex items-center gap-10">
				{links.map((link: Link) => (
					<NavLink
						key={link.path}
						to={link.path}
						className={({ isActive }) =>
							`transition-all ${isActive ? 'active-navlink' : 'text-white'}`
						}
					>
						{link.name}
						<div className="active-line"></div>
					</NavLink>
				))}
			</div>
			<div className="flex items-center gap-4">
				<Button variant="outline">Login</Button>
				<Button>Register</Button>
			</div>
		</div>
	);
};

export default Navbar;
