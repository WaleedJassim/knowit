import { NavLink } from 'react-router';
import Logo from '../../assets/images/knowit-white.png';
import { Button } from '../ui/button';

const links = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Courses',
		path: '/courses',
	},
	{
		name: 'Vacancies',
		path: '/vacancies',
	},
	{
		name: 'Blog',
		path: '/blog',
	},
	{
		name: 'Our Team',
		path: '/team',
	},
	{
		name: 'Placements',
		path: '/placements',
	},
	{
		name: 'About Us',
		path: '/about',
	},
	{
		name: 'Contact Us',
		path: '/contact',
	},
];

const Navbar = () => {
	return (
		<div className="p-6 bg-transparent flex justify-between items-center">
			<img src={Logo} alt="Knowit" className="w-32" />
			<div className="flex items-center gap-10">
				{links.map((link) => (
					<NavLink
						to={link.path}
						className={({ isActive }) =>
							`${isActive ? 'text-(--color-primary)' : 'text-white'}`
						}
					>
						{link.name}
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
