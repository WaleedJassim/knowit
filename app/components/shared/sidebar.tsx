import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { HamburgerIcon } from '~/assets/icons';

const Sidebar = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="px-3 cursor-pointer">
					<HamburgerIcon className="w-[30px] h-6" />
				</button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
