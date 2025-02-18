import { PlayIcon } from '~/assets/icons';

const AboutUs = () => {
	return (
		<div className="flex items-center gap-6 flex-col sm:flex-row p-6">
			<div className="relative overflow-hidden rounded-lg w-full">
				<img
					src="https://s3-alpha-sig.figma.com/img/917d/5461/fea9682af268f536ad3cba594465f0df?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QrXemvqQwO0DqqcDONbv-CiiJzSa~fLzBBJf3Q7jOlyz1zDhngwYBmCFEgYP-QMWw8J6PuZWh6jYWAM~rvUwLZB3cR37jexOpafn4ApRAiEuYgaahbcNSY-RmkDwXsjkDEuDBE1Rl-Wh5Vn~5TMWA5VeykgYcmEG2CKMcKst7w6Y4YM0K98brihzBC08uh2KetdANfFeusV8y1E7HxZEQx86wQmbICcIN1sALsAL5ZpcFgvKYMIrLZOL6qu37I8mhNbYjpXuU255SKX4g42mVDU2xlzmp42Z-nhy3t1dFd--WMNf~7TgU3f9o~23vs48KkQSWur0ST9XTS1sz9SFlw__"
					alt=""
					className="w-full h-auto"
				/>
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
