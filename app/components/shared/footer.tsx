import { Link } from 'react-router';
import Logo from '~/assets/images/knowit-white.png';
import type { Link as TLink } from '~/lib/constants';

export const links: TLink[] = [
	{
		name: 'Sign In',
		path: '/signin',
	},
	{
		name: 'Courses',
		path: '/courses',
	},
	{
		name: 'Terms and Conditions',
		path: '/terms',
	},
	{
		name: 'About Us',
		path: '/about',
	},
	{
		name: 'Educators',
		path: '/educators',
	},
	{
		name: 'Privacy and Policy',
		path: '/privacy',
	},
	{
		name: 'Contact Us',
		path: '/contact',
	},
	{
		name: 'Vacancies',
		path: '/vacancies',
	},
	{
		name: 'Categories',
		path: '/categories',
	},
];

const Footer = () => {
	return (
		<div className="bg-background">
			<div className="px-6 py-12 border-b border-white flex sm:flex-row flex-col justify-between sm:items-center">
				<div className="flex flex-col gap-2 text-[15px]">
					<p className="font-bold text-lg">Address</p>
					<p>Knowit Education</p>
					<p>A block, 2 nd Floor , Mather Square</p>
					<p>Kochi - 682018 Phone: 7994288555</p>
				</div>
				<div className="grid grid-cols-3 gap-3">
					{links.map((link: TLink) => (
						<Link
							to={link.path}
							className="text-lg hover:text-(--color-primary)"
						>
							{link.name}
						</Link>
					))}
				</div>
				<img src={Logo} alt="Knowit" className="w-2xs" />
			</div>
			<div className="p-6">
				<span>© 2025, Knowit - All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
