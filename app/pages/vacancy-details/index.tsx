import type { EmblaOptionsType } from 'embla-carousel';
import JobImage from '~/assets/dummy/job.png';
import {
	ArrowUpRightIcon,
	BookmarkIcon,
	EmailOutlineIcon,
	OpenArrowIcon,
	TelephoneOutlineIcon,
} from '~/assets/icons';
import AlignCarousel from '~/components/shared/carousel';
import JobCard from '~/components/shared/job-card';
import { Button } from '~/components/ui/button';

const responsibilities = [
	'Quisque semper gravida est et consectetur.',
	'Curabitur blandit lorem velit, vitae pretium leo placerat eget.',
	'Morbi mattis in ipsum ac tempus.',
	'Curabitur eu vehicula libero.',
	'Vestibulum sed purus ullamcorper, lobortis lectus nec.',
	'Vulputate turpis.',
	'Quisque ante odio, iaculis a porttitor sit amet.',
	'Lobortis vel lectus.',
	'Nulla at risus ut diam.',
	'Commodo feugiat.',
	'Nullam laoreet, diam placerat dapibus tincidunt.',
	'Odio metus posuere lorem, id condimentum erat velit nec neque.',
	'Dui sodales ut.',
	'Curabitur tempus augue.',
];

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDES = [
	<div className="flex flex-col gap-4">
		<JobCard />
		<JobCard />
	</div>,
	<div className="flex flex-col gap-4">
		<JobCard />
		<JobCard />
	</div>,
	<div className="flex flex-col gap-4">
		<JobCard />
		<JobCard />
	</div>,
];

const VacancyDetailsPage = () => {
	return (
		<div className="p-6 flex flex-col gap-8">
			<div className="flex flex-col gap-8">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<div className="w-[72px] aspect-square rounded-sm overflow-hidden">
							<img
								src={JobImage}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p>Linear company</p>
							<div className="flex items-center gap-4">
								<p className="text-2xl font-medium">Mechanical Engineer</p>
								<div className="bg-[#FEF3BF] text-[#B79800] px-1.5 py-1 rounded-[3px] text-xs">
									New post
								</div>
								<div className="bg-[#E8F1FF] text-[#0066FF] px-1.5 py-1 rounded-[3px] text-xs">
									Full Time
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex items-center gap-2">
									<TelephoneOutlineIcon />
									<p>(406) 555-0120</p>
								</div>
								<div className="flex items-center gap-2">
									<EmailOutlineIcon />
									<p>career@linear.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 items-end">
						<div className="flex items-center gap-3">
							<Button className="rounded-sm bg-[#FEED9F] hover:bg-[#FEED9F]">
								<BookmarkIcon />
							</Button>
							<Button className="rounded-sm hover:bg-white px-8">
								Apply Now
								<OpenArrowIcon />
							</Button>
						</div>
						<div className="bg-white rounded-xs px-1">
							<p className="text-primary text-sm">
								Job expire in:{' '}
								<span className="text-[#E05151]"> June 30, 2021</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-8">
					<div className="flex flex-col gap-4 w-3/5">
						<p className="text-lg font-medium">Job Description</p>
						<p>
							Integer aliquet pretium consequat. Donec et sapien id leo accumsan
							pellentesque eget maximus tellus. Duis et est ac leo rhoncus
							tincidunt vitae vehicula augue. Donec in suscipit diam.
							Pellentesque quis justo sit amet arcu commodo sollicitudin.
							Integer finibus blandit condimentum. Vivamus sit amet ligula
							ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet
							aliquam urna. Maecenas blandit felis id massa sodales finibus.
							Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam
							tincidunt accumsan faucibus. Quisque blandit augue quis turpis
							auctor, dapibus euismod ante ultricies. Ut non felis lacinia
							turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse
							sollicitudin faucibus aliquet.\n\n Nam dapibus consectetur erat in
							euismod. Cras urna augue, mollis venenatis augue sed, porttitor
							aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit
							amet quam eget lobortis. Etiam in neque sit amet orci interdum
							tincidunt.
						</p>
						<p className="text-lg font-medium">Responsibilities</p>
						<ul className="list-disc list-inside flex flex-col gap-2">
							{responsibilities.map((item) => (
								<li>{item}</li>
							))}
						</ul>
					</div>
					<div className="bg-white w-2/5 h-[400px] rounded-lg"></div>
				</div>
			</div>
			<div className="flex flex-col gap-6">
				<p className="font-semibold text-[28px]">Related Vacancies</p>
				<div>
					<AlignCarousel slides={SLIDES} options={OPTIONS} />
				</div>
			</div>
		</div>
	);
};

export default VacancyDetailsPage;
