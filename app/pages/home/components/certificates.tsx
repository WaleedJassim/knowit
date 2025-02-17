import Background from '~/assets/images/bg.png';
import { CertificateImages } from '~/assets/images/certificates';

const Certificates = () => {
	return (
		<div className="bg-white py-3">
			<div
				className="bg-background bg-cover bg-no-repeat px-12 py-16 flex sm:flex-row flex-col justify-evenly gap-6"
				style={{
					backgroundImage: `url(${Background})`,
				}}
			>
				<div className="flex flex-col gap-4 sm:w-1/3">
					<div className="h-1 bg-primary w-[70px] rounded-full"></div>
					<p className="text-[28px] font-semibold text-(--color-primary)">
						Accelerate Your Career with
						<br /> Accredited Certificates
					</p>
					<p className="text-lg font-light">
						Accelerate Your Career with Accredited Certificates! Gain
						industry-recognized credentials that showcase your expertise and
						open doors to exciting opportunities
					</p>
				</div>
				<div className="grid grid-cols-4 gap-14">
					{CertificateImages.map((image) => (
						<div className="w-28 aspect-square rounded-2xl [&:nth-child(4)]:rounded-full bg-white px-2 flex items-center justify-center">
							<img src={image.src} alt={image.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certificates;
