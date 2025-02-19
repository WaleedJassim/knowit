import type { EmblaOptionsType } from 'embla-carousel';
import AlignCarousel from '~/components/shared/carousel';
import SuccessStoryCard from '~/components/shared/success-story-card';

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDES = [
	<SuccessStoryCard />,
	<SuccessStoryCard />,
	<SuccessStoryCard />,
	<SuccessStoryCard />,
];

const SuccessStories = () => {
	return (
		<div className="bg-white text-primary px-6 py-12">
			<div className="text-center">
				<p className="text-lg font-medium">
					Discover the inspiring success stories of our learners
				</p>
				<p className="text-4xl font-bold">
					Our Success Stories: Hear From Our Graduates
				</p>
			</div>
			<div className="w-full mt-12">
				<AlignCarousel slides={SLIDES} options={OPTIONS} />
			</div>
		</div>
	);
};

export default SuccessStories;
