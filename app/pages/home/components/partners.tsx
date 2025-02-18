import Map from '~/assets/images/map.png';
import { PartnerImages } from '~/assets/images/partners';

const Partners = () => {
	return (
		<div className="sm:p-12 p-6 flex flex-col gap-12">
			<div className="flex items-center justify-between gap-4">
				<div className="flex flex-col gap-8 font-medium w-full">
					<div>
						<p>Collaborating with Industry Leaders for Your Career Growth</p>
						<p className="text-4xl font-bold text-(--color-primary)">
							Our Trusted Hiring Partners
						</p>
					</div>
					<p>
						We are proud to collaborate with leading companies across various
						industries to bring you the best career opportunities. Our trusted
						hiring partners value talent, innovation, and dedication, and
						together, we strive to help you reach your professional goals.
						Explore career openings with our esteemed partners today!
					</p>
				</div>
				<div className="w-full h-auto hidden sm:block">
					<img src={Map} alt="" className="w-full" />
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-6 gap-14 mx-auto">
				{PartnerImages.map((image, index) => (
					<div
						key={index}
						className="w-28 aspect-square rounded-2xl overflow-hidden bg-white px-2 flex items-center justify-center [&:nth-child(3)]:rounded-full [&:nth-child(6)]:rounded-full [&:nth-child(7)]:rounded-full [&:nth-child(10)]:rounded-full"
					>
						<img src={image.src} alt={image.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Partners;
