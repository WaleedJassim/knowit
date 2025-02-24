import { FilterIcon } from '~/assets/icons';
import JobCard from '~/components/shared/job-card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

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
					<div className="bg-white p-40 rounded-lg h-[800px]"></div>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-4 justify-between">
							<p className="text-[32px] font-bold">3177 Jobs</p>
							<Button>
								<FilterIcon />
								Filters
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
