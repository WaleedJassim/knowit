import SuccessStoryCard from '~/components/shared/success-story-card';

const PlacementsPage = () => {
	return (
		<div className="md:mx-32 p-6 flex flex-col items-center gap-6">
			<div className="text-center flex flex-col items-center gap-2">
				<p className="font-medium text-lg">
					Discover the inspiring success stories of our learners
				</p>
				<p className="font-bold text-4xl text-(--color-primary)">
					Our Success Stories: Hear From Our Students
				</p>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
				{Array(10)
					.fill(10)
					.map((_, i) => (
						<SuccessStoryCard className="bg-white text-primary" />
					))}
			</div>
		</div>
	);
};

export default PlacementsPage;
