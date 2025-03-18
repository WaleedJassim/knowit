import { PlayIcon } from '~/assets/icons';
import HomeAbout from '~/assets/dummy/home-about.png';

const AboutUs = () => {
	return (
		<div className="flex items-center gap-6 flex-col md:flex-row p-6">
			<div className="relative overflow-hidden rounded-lg w-full">
				<img src={HomeAbout} alt="" className="w-full h-auto" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080E16/55] to-[#080E16]/90" />
				<PlayIcon className="absolute inset-0 m-auto w-12 h-12 text-white drop-shadow-lg" />
			</div>
			<div className="w-full flex flex-col gap-5">
				<div className="flex flex-col gap-3">
					<div>
						<p className="text-(--color-primary) font-bold text-2xl">
							About Us
						</p>
						<div className="h-1 bg-primary w-[70px] rounded-full mt-1.5"></div>
					</div>
					<p className="font-semibold text-5xl">
						<span className="text-(--color-primary)">Knowit</span> connects
						education,{' '}
						<span className="text-(--color-primary)">skills, and career</span>{' '}
						support for industry-ready{' '}
						<span className="text-(--color-primary)">expertise.</span>
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<p>
						Knowit is a platform designed to bridge the gap between education
						and industry. It offers expert-led courses across various fields,
						such as mechanical, healthcare, and testing, helping individuals
						gain industry-relevant skills.
					</p>
					<p>
						With career support, including job listings and placement
						assistance, and a community to foster learning and growth, Knowit
						empowers learners to turn their knowledge into actionable expertise
						and achieve their career goals.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
