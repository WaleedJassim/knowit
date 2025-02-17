import Background from '~/assets/images/bg.png';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const Hero = () => {
	return (
		<div>
			<div
				className="h-full flex flex-col sm:flex-row items-center justify-evenly pb-16 pt-24 w-full bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url(${Background})`,
					backgroundPosition: 'center top -86px',
				}}
			>
				<div className="flex flex-col items-start justify-center ps-6 sm:ps-28 md:ps-52 pe-6 gap-3">
					<p>Start your favourite course</p>
					<p className="text-(--color-primary) font-bold text-4xl">
						Now learning from
						<br /> anywhere, and build
						<br /> your <span className="text-white">bright career.</span>
					</p>
					<Button>Start Learning</Button>
					<p className="mt-12">
						Trusted since 2016, we’ve been empowering individuals and businesses
						with reliable solutions, fostering growth, and delivering excellence
						every step of the way
					</p>
				</div>
				<div className="w-full"></div>
			</div>
			<div className="py-10 sm:px-32 px-6 bg-primary">
				<Input placeholder="Search courses, jobs, or educators" />
			</div>
		</div>
	);
};

export default Hero;
