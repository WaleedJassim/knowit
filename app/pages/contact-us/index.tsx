import { Link } from 'react-router';
import {
	EmailIcon,
	LocationIcon,
	SendIcon,
	TelephoneIcon,
} from '~/assets/icons';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const InterestedTopics = [
	'Mechanical',
	'Health Care',
	'Graphic design',
	'Design system',
	'Other',
];

const ContactUsPage = () => {
	return (
		<div className="bg-white md:px-32 px-6 md:py-8 py-6">
			<div className="w-full bg-background rounded-[18px] p-6 flex items-center">
				<div className="flex items-center justify-between h-full gap-10 flex-col gap-4 w-full">
					<p className="text-4xl font-bold">
						Get in <span className="text-(--color-primary)">touch,</span>
					</p>
					<div className="flex items-center flex-col gap-3">
						<Link
							to="mailto:knowitedu@gmail.com"
							className="hover:bg-primary/20 p-4 border-2 border-background hover:border-primary rounded-xl w-full flex items-center gap-3 px-8"
						>
							<EmailIcon />
							<p>knowitedu@gmail.com</p>
						</Link>
						<Link
							to="tel:+91858584152"
							className="hover:bg-primary/20 p-4 border-2 border-background hover:border-primary rounded-xl w-full flex items-center gap-3 px-8"
						>
							<TelephoneIcon />
							<p>+91 858584152</p>
						</Link>
						<div className="flex gap-3 px-8 py-4">
							<LocationIcon />
							<p>
								Knowit Education
								<br /> A block, 2 nd Floor , Mather Square
								<br /> Kochi - 682018 Phone: 7994288555
							</p>
						</div>
					</div>
				</div>
				<div className="w-full bg-white p-6 rounded-[9px] flex flex-col gap-4">
					<p className="text-primary font-bold">I’m interested in...</p>
					<div className="flex items-center gap-3 flex-wrap">
						{InterestedTopics?.map((item, index) => (
							<Button
								key={index}
								className="w-max bg-[#ECEEF5] hover:bg-primary border-[#ECEEF5] hover:border-primary shadow-none"
							>
								{item}
							</Button>
						))}
					</div>
					<div className="flex flex-col gap-4">
						<Input className="rounded-none border-b" placeholder="Your Name" />
						<Input className="rounded-none border-b" placeholder="Your Email" />
						<Input
							className="rounded-none border-b"
							placeholder="Your Message"
						/>
					</div>
					<div className="mt-40">
						<Button className="hover:border-background hover:bg-background hover:text-white px-8">
							<SendIcon />
							Send Message
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
