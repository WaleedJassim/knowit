import type { EmblaOptionsType } from 'embla-carousel';
import AlignCarousel from '~/components/shared/carousel';
import JobCard from '~/components/shared/job-card';

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDES = [<JobCard />, <JobCard />, <JobCard />, <JobCard />];

const Vacancies = () => {
	return (
		<div className="bg-white text-primary px-6 py-12">
			<div className="text-center">
				<p className="text-lg font-medium">
					Explore Exciting Job Vacancies at Knowit
				</p>
				<p className="text-4xl font-bold">
					Ready to take the next step in your career
				</p>
			</div>
			<div className="w-full mt-12">
				<AlignCarousel slides={SLIDES} options={OPTIONS} />
			</div>
		</div>
	);
};

export default Vacancies;
