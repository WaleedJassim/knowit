import TeamMemberCard from '~/components/shared/team-member-card';

const OurTeamPage = () => {
	return (
		<div className="bg-black md:px-32 px-6 py-24">
			<div className="flex md:flex-row flex-col items-center gap-6 justify-between">
				<div className="flex md:flex-row flex-col items-center gap-16">
					<TeamMemberCard />
					<TeamMemberCard />
				</div>
				<div className="text-center">
					<p className="text-[40px]">
						MEET OUR{' '}
						<span className="text-(--color-primary) font-bold">BEST TEAM</span>
					</p>
					<p>
						Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie
						<br className="hidden md:block" />
						aliquet arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor
						<br className="hidden md:block" />
						lectus quis turpis malesuada, eu luctus elit dignissim.
					</p>
				</div>
			</div>
			<div className="flex gap-16 md:flex-row flex-col justify-between items-center mt-24">
				{Array.from({ length: 4 }).map((_, index) => (
					<TeamMemberCard key={index} />
				))}
			</div>
		</div>
	);
};

export default OurTeamPage;
