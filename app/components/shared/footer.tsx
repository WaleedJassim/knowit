import Logo from '~/assets/images/knowit-white.png';

const Footer = () => {
	return (
		<div className="bg-background">
			<div className="px-6 py-12 border-b border-white">
				<img src={Logo} alt="Knowit" className="w-2xs" />
			</div>
			<div className="p-6">
				<span>© 2025, Knowit - All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
