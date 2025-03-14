import AboutImage from '~/assets/images/about.jpg';
import DotsRight from '~/assets/images/dots-right.png';
import DotsYellowLeft from '~/assets/images/dots-yellow-left.png';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const AboutUsPage = () => {
	return (
		<div>
			<div className="bg-white pb-8">
				<div className="flex justify-between md:flex-row flex-col items-center md:px-32 px-6 gap-6 py-6">
					<div className="w-full">
						<p className="text-primary font-bold text-[50px]">
							Transforming Learning, Empowering Success
						</p>
						<p className="text-secondary">
							Welcome to Knowit, where education meets innovation. We are a
							dedicated platform committed to transforming the way students and
							professionals learn, grow, and achieve their goals.
						</p>
					</div>
					<div className="w-full flex md:justify-end justify-center">
						<div className="relative">
							<img src={DotsRight} alt="" className="absolute w-20 top-4 z-0" />
							<div className="w-[350px] h-[360px] overflow-hidden rounded-b-[145px] rounded-tl-[145px] relative z-10">
								<img src={AboutImage} alt="About" className="object-cover" />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFAE6] px-6 py-10 flex flex-col items-center justify-center gap-6">
					<p className="text-[#000033] font-semibold text-4xl text-center">
						Are you ready to transfrom your Marriage and
						<br /> Relationship Book a session with us
					</p>
					<Button className="rounded-2xl">Make an Appointment</Button>
				</div>
			</div>
			<div className="bg-white text-center flex flex-col gap-6 justify-center items-centers px-6 py-28 relative">
				<p className="text-primary font-bold text-4xl z-10">
					Subscribe to our newsletter
				</p>
				<p className="text-secondary font-medium z-10">
					We recommend you to subscribe to our newsletter , drop
					<br className="md:block hidden" /> your email below to get daliy
					update about us
				</p>
				<div className="flex gap-3 md:flex-row flex-col justify-center items-center mt-6 z-10">
					<Input
						placeholder="Enter your email address"
						className="rounded-[20px] bg-[#F2F1F1] text-[13px] font-light px-9 md:w-[500px]"
					/>
					<Button className="rounded-2xl">Subscribe</Button>
				</div>
				<img src={DotsRight} alt="" className="absolute right-0 bottom-0 z-0" />
				<img
					src={DotsYellowLeft}
					alt=""
					className="absolute left-0 top-1/2 -translate-y-1/2 z-0"
				/>
			</div>
		</div>
	);
};

export default AboutUsPage;
