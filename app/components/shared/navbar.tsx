import { NavLink } from 'react-router';
import Logo from '~/assets/images/knowit-white.png';
import { Button } from '~/components/ui/button';
import { links, type Link } from '~/lib/constants';
import { Input } from '../ui/input';
import { HamburgerIcon } from '~/assets/icons';
import Sidebar from './sidebar';

const Navbar = () => {
	return (
		<div className="p-6 flex md:flex-row flex-col justify-between md:items-center gap-3 sticky top-0 z-50 transition-all duration-300 bg-white-4 backdrop-blur-3xl">
			<img src={Logo} alt="Knowit" className="w-32" />
			<div className="md:hidden flex items-center">
				<Sidebar />
				<Input
					placeholder="Search courses, jobs, or educators"
					className="rounded-2xl"
				/>
			</div>
			<div className="hidden md:flex items-center gap-10">
				{links.map((link: Link, index) => (
					<NavLink
						key={index}
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
			<div className="hidden md:flex items-center gap-4 invisible">
				<Button variant="outline">Login</Button>
				<Button>Register</Button>
			</div>
		</div>
	);
};

export default Navbar;
