import type { EmblaOptionsType } from 'embla-carousel';
import CourseBackground from '~/assets/dummy/course-detail.png';
import {
	CalendarIcon,
	CheckGreenIcon,
	CheckIcon,
	EligibilityIcon,
	ListPointIcon,
	StarIcon,
	StudentIcon,
} from '~/assets/icons';
import AlignCarousel from '~/components/shared/carousel';
import JobCard from '~/components/shared/job-card';
import { Button } from '~/components/ui/button';
import Person1 from '~/assets/dummy/person-1.jpeg';

const why = [
	'Gain 2 years of QA/QC Mechanical Engineering experience in just 3 months.',
	'Meet industry demand for professionals skilled in welding, quality control, piping, and NDT.',
	'Ensure safety and quality with knowledge of QA/QC measures and welding principles.',
	'Learn to implement 5S and 7QC tools for cost savings and improved efficiency.',
	'Unlock career opportunities in oil & gas, construction, manufacturing, and other industries.',
];

const benefits = [
	'100% placement guarantee.',
	'Certified expert training.',
	'Trusted by top recruiters.',
	'Career-focused skill building.',
	'Advanced learning programs.',
	'Real-world industry exposure.',
];

const learn = [
	'Gain expertise in QA/QC practices for Mechanical Engineering.',
	'Master welding principles, piping systems, and NDT techniques.',
	'Learn 5S and 7QC tools to improve efficiency and reduce waste.',
];

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDES = [<JobCard />, <JobCard />, <JobCard />, <JobCard />];

const CourseDetailsPage = () => {
	return (
		<div className="bg-white">
			<div
				className="h-full w-full bg-cover bg-no-repeat p-6 relative"
				style={{
					backgroundImage: `url(${CourseBackground})`,
					backgroundPosition: 'center top -86px',
				}}
			>
				<div className="absolute inset-0 bg-black opacity-70"></div>
				<div className="relative h-full flex flex-col md:w-3/4 w-full text-white gap-6">
					<p className="font-bold text-5xl">Mechanical QA QC</p>
					<p className="md:w-[77%]">
						Mechanical QA QC Course from Ambit Automation covers all major
						aspects of the QA QC Course. Quality Assurance is about developing a
						process and forming a procedure through which the product is made.
						QA is monitoring the process and maintaining the standard level of
						the product and system along with QMS.
					</p>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<EligibilityIcon />
							<p>Eligibility : 12th / Diploma / Degree / Engineering</p>
						</div>
						<div className="flex items-center gap-2">
							<StudentIcon />
							<p>20,000+ Learners</p>
						</div>
						<div className="flex items-center gap-2">
							<CalendarIcon />
							<p>Duration : 3 months</p>
						</div>
					</div>
					<div className="flex gap-6 items-baseline">
						<div className="flex items-center gap-3">
							<p className="font-medium text-[#F4D053] text-[22px]">4.0</p>
							<StarIcon className="w-6 h-6" />
							<p>(1,249 ratings)</p>
							<p>2,945 students Enrolled</p>
						</div>
						<Button className="px-10 py-4 rounded-lg">
							Enroll And Get Certificate now
						</Button>
					</div>
				</div>
			</div>
			<div className="flex gap-6 py-6 pe-6">
				<div className="flex flex-col md:w-3/4 w-full gap-6">
					<div
						id="about-course"
						className="text-[#332F2F] flex flex-col gap-3 px-6"
					>
						<p className="text-primary font-bold text-2xl">About</p>
						<p>
							Mechanical QA QC Course from Ambit Automation covers all major
							aspects of the QA QC Course. Quality Assurance is about developing
							a process and forming a procedure through which the product is
							made. QA is monitoring the process and maintaining the standard
							level of the product and system along with QMS.
						</p>
					</div>
					<div
						id="why-this-course"
						className="text-[#332F2F] flex flex-col gap-3 px-6"
					>
						<p className="text-primary font-bold text-2xl">
							Why take this course?
						</p>
						<div className="flex flex-col gap-3">
							{why.map((item, index) => (
								<div key={index} className="flex items-center gap-3">
									<ListPointIcon />
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
					<div className="bg-[#FEED9F] flex flex-col gap-3 p-6 text-primary">
						<p className="text-primary font-bold text-2xl">
							Benefits of Knowit
						</p>
						<div className="grid grid-cols-3 gap-x-4 gap-y-8">
							{benefits.map((item, index) => (
								<div key={index} className="flex items-center gap-3">
									<div className="w-12 h-12 bg-primary text-2xl font-semibold flex items-center justify-center rounded-full">
										{index + 1}
									</div>
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="shadow-lg rounded-lg py-8 flex flex-col gap-4 text-primary h-max">
					<img
						src={CourseBackground}
						alt=""
						className="w-full h-44 rounded-md px-4"
					/>
					<div className="flex flex-col gap-2 px-4">
						<div className="bg-primary uppercase px-1 w-max text-[10px] font-medium">
							Mechanical
						</div>
						<p className="font-medium">Mechanical QA QC</p>
					</div>
					<div className="flex items-center justify-between px-4">
						<div className="flex items-center gap-3">
							<img src={Person1} alt="" className="w-10 h-10 rounded-full" />
							<div className="text-xs flex flex-col gap-1">
								<p className="text-secondary">Tutor</p>
								<p>Arun Das</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<StarIcon className="w-5 h-5" />
							<p className="font-medium">
								4.0{' '}
								<span className="font-normal text-secondary">(357,914)</span>
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between text-xs text-[#4E5566] px-4">
						<div>
							<p>
								<span className="font-semibold">20K</span> students
							</p>
						</div>
						<div>
							<p>Advanced</p>
						</div>
						<div>
							<p>3 Months</p>
						</div>
					</div>
					<div className="border-b border-t border-[#E9EAF0] p-4 flex flex-col gap-3">
						<p className="uppercase text-[#1D2026] text-xs font-medium">
							What you’ll learn
						</p>
						<div className="text-xs flex flex-col gap-3 text-[#6E7485]">
							{learn.map((item, index) => (
								<div key={index} className="flex gap-3">
									<CheckGreenIcon />
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
					<div className="px-4">
						<Button className="rounded-none hover:bg-black hover:text-white hover:border-black w-full text-xs font-semibold">
							Enroll and Get Certificate now
						</Button>
					</div>
				</div>
			</div>
			<div>
				<p className="text-primary font-bold text-2xl p-6">Student reviews</p>
				<div className="bg-[#F3F5F6] py-10 px-6">
					<AlignCarousel slides={SLIDES} options={OPTIONS} />
				</div>
			</div>
		</div>
	);
};

export default CourseDetailsPage;
