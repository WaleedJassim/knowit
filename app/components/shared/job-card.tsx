import { ExternalLinkIcon } from '~/assets/icons';
import { Button } from '../ui/button';
import JobImage from '~/assets/dummy/job.png';

const JobCard = () => {
	return (
		<div className="border border-[#1414140D] rounded-lg p-6 text-secondary bg-white">
			<div className="flex items-start gap-6">
				<div className="w-32 aspect-square rounded-sm overflow-hidden">
					<img src={JobImage} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-lg">Linear company</p>
					<div className="flex items-center gap-3">
						<p className="text-2xl font-medium text-primary">
							Mechanical Engineer
						</p>
						<div className="bg-[#FEF3BF] test-[#B79800] px-1.5 py-1 rounded-[3px] text-xs">
							New post
						</div>
					</div>
					<div className="flex items-baseline justify-between">
						<div className="flex items-center gap-12">
							<p>Kochi</p>
							<p>Full time</p>
							<p>29 min ago</p>
						</div>
						<Button>
							Apply now
							<ExternalLinkIcon />
						</Button>
					</div>
					<p className="pt-2">
						We are seeking a detail-oriented QA/QC Mechanical Engineer to
						oversee quality assurance and control processes in mechanical
						engineering projects.
					</p>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
