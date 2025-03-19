import { WhatsAppIcon } from '~/assets/icons';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const WelcomeModal = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<WhatsAppIcon className="w-14 h-14" />
				</DialogTrigger>
				<DialogContent
					hideClose
					className="bg-white text-primary p-6 sm:p-8 md:p-10"
				>
					<DialogHeader className="flex flex-col items-center text-center">
						<p className="text-2xl md:text-[32px] font-semibold">Welcome</p>
						<p className="text-sm md:text-base text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							<br className="hidden md:block" /> Quam duis vitae curabitur amet,
							fermentum lorem.
						</p>
					</DialogHeader>
					<DialogDescription className="flex flex-col gap-4">
						<div className="flex flex-col sm:flex-row gap-4">
							<Input
								className="border border-[#D2D5DA] rounded-lg text-sm md:text-base"
								placeholder="Your name"
							/>
							<Input
								className="border border-[#D2D5DA] rounded-lg text-sm md:text-base"
								placeholder="Your last name"
							/>
						</div>
						<Input
							className="border border-[#D2D5DA] rounded-lg text-sm md:text-base"
							placeholder="yourmail@gmail.com"
						/>
						<Input
							className="border border-[#D2D5DA] rounded-lg text-sm md:text-base"
							placeholder="Enter phone number"
						/>
					</DialogDescription>
					<DialogFooter>
						<Button className="h-10 w-full px-6">Submit</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default WelcomeModal;
