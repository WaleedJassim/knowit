import { useState } from 'react';
import { NavLink } from 'react-router';
import {
	ArrowLeftIcon,
	ArrowRightPrimaryIcon,
	HamburgerIcon,
} from '~/assets/icons';
import { links, type Link } from '~/lib/constants';
import { Button } from '../ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '../ui/sheet';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<button className="pe-3 cursor-pointer">
					<HamburgerIcon className="w-[30px] h-6" />
				</button>
			</SheetTrigger>
			<SheetContent side="left" className="border-none p-0">
				<SheetHeader className="flex flex-row items-center justify-between gap-4 px-5 py-4 border-b border-[#FFFFFF24]">
					<SheetClose className="mb-0" asChild>
						<ArrowLeftIcon />
					</SheetClose>
					<div className="flex items-center gap-4">
						<Button variant="outline">Login</Button>
						<Button>Register</Button>
					</div>
				</SheetHeader>
				<div className="flex flex-col">
					{links.map((link: Link, index) => (
						<NavLink
							key={index}
							to={link.path}
							onClick={handleClose}
							className="px-5 py-4 border-b border-[#FFFFFF24] flex items-center justify-between"
						>
							{link.name}
							<ArrowRightPrimaryIcon />
						</NavLink>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
