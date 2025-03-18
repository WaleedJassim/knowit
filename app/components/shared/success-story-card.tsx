import { QuotesIcon } from '~/assets/icons';
import { cn } from '~/lib/utils';
import SuccessAvatar from '~/assets/dummy/success.jpeg';

type SuccessStoryCardProps = {
	className?: string;
};

const SuccessStoryCard = (props: SuccessStoryCardProps) => {
	return (
		<div
			className={cn(
				'bg-background p-6 relative flex md:flex-row flex-col gap-6 rounded-2xl text-white embla__slide__number-scale',
				props.className
			)}
		>
			<div className="absolute top-4 right-4">
				<QuotesIcon />
			</div>
			<div className="md:w-[277px] md:h-[302px] rounded-lg overflow-hidden">
				<img src={SuccessAvatar} alt="" className="w-full h-auto" />
			</div>
			<div className="flex flex-col gap-4 md:w-[60%] mt-6">
				<p>
					Thanks to Knowit's expert training, I secured a position with XYZ
					Corp, and my career is now on the fast track! The comprehensive
					mechanical engineering program provided me with both the technical
					skills and practical knowledge needed in the industry.
				</p>
				<div>
					<p className="text-base font-semibold">Akhil S</p>
					<p className="text-(--color-primary) text-sm mt-1">
						Mechanical Engineer at XYZ Corp
					</p>
				</div>
			</div>
		</div>
	);
};

export default SuccessStoryCard;
