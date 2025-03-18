import { FilterIcon } from '~/assets/icons';
import JobCard from '~/components/shared/job-card';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

const locationFilter = [
	'Near me',
	'Remote job',
	'Exact location',
	'Within 15 km',
	'Within 30 km',
	'Within 50 km',
];

const salaryFilter = ['Any', '> 30000k', '> 50000k', '> 80000k', '> 100000k'];

const dateFilter = ['All time', 'Last 24 hours', 'Last 3 days', 'Last 7 days'];

const experienceFilter = ['Any experience', 'Internship', 'Work remotely'];

const employmentFilter = ['Full-time', 'Temporary', 'Part-time'];

const VacanciesPage = () => {
	return (
		<div className="p-6 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<p className="text-4xl font-bold">
					Find your <span className="text-(--color-primary)">new job</span>{' '}
					today
				</p>
				<p className="text-lg font-medium">
					Find Your Next Career Opportunity with Us
				</p>
			</div>
			<div className="bg-background flex flex-col gap-8">
				<div className="flex items-center gap-4 justify-between">
					<div className="flex items-center">
						<Input
							placeholder="Search your Course"
							className="md:w-md rounded-2xl rounded-r-none bg-[#FFFAE6] text-sm"
						/>
						<Input
							placeholder="Search your Course"
							className="md:w-md rounded-none bg-[#FFFAE6] text-sm"
						/>
						<Button className="h-12 rounded-l-none rounded-r-sm">
							Search job
						</Button>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-white p-6 rounded-lg text-primary w-[350px] h-max flex flex-col gap-4">
						<p className="text-xl font-bold">Filters</p>
						<div className="flex flex-col gap-3">
							<p className="text-lg font-medium">Location</p>
							<RadioGroup className="gap-3">
								{locationFilter.map((item, index) => (
									<div className="flex items-center space-x-2" key={index}>
										<RadioGroupItem value={item} id={item} />
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</RadioGroup>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-lg font-medium">Salary</p>
							<div className="border border-[#1414141A] flex items-center">
								<div className="p-3 border-r border-[#1414141A]">Hourly</div>
								<div className="p-3 border-r border-[#1414141A]">Monthly</div>
								<div className="p-3 bg-primary">Yearly</div>
							</div>
							<RadioGroup className="gap-3">
								{salaryFilter.map((item, index) => (
									<div className="flex items-center space-x-2" key={index}>
										<RadioGroupItem value={item} id={item} />
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</RadioGroup>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-lg font-medium">Date of posting</p>
							<RadioGroup className="gap-3">
								{dateFilter.map((item, index) => (
									<div className="flex items-center space-x-2" key={index}>
										<RadioGroupItem value={item} id={item} />
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</RadioGroup>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-lg font-medium">Work experience</p>
							<RadioGroup className="gap-3">
								{experienceFilter.map((item, index) => (
									<div className="flex items-center space-x-2" key={index}>
										<RadioGroupItem value={item} id={item} />
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</RadioGroup>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-lg font-medium">Type of employment</p>
							<div className="flex flex-col gap-3">
								{employmentFilter.map((item, index) => (
									<div className="flex items-center space-x-2" key={index}>
										<Checkbox />
										<Label htmlFor={item}>{item}</Label>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-4 justify-between">
							<p className="text-[32px] font-bold">3177 Jobs</p>
							<Button>
								<FilterIcon />
								Filter By
							</Button>
						</div>
						<div className="flex flex-col gap-9">
							{Array(6)
								.fill(6)
								.map((_, index) => (
									<JobCard />
								))}
						</div>
					</div>
					<div>
						<div className="bg-white p-6 rounded-lg text-primary flex flex-col gap-3">
							<p className="text-xl font-bold">Email me for jobs</p>
							<p>
								Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat
								commodo ea foes.
							</p>
							<Input className="border" placeholder="name@mail.com" />
							<Button>Subcribe</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacanciesPage;
