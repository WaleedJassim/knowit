import { ExternalLinkIcon } from '~/assets/icons';
import { Button } from '../ui/button';

const JobCard = () => {
	return (
		<div className="border border-[#1414140D] rounded-lg p-6 text-secondary bg-white">
			<div className="flex items-start gap-6">
				<div className="w-32 aspect-square rounded-sm overflow-hidden">
					<img
						src="https://s3-alpha-sig.figma.com/img/d12d/6739/2dc95162474d80554696fca0be6144bc?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TRUaBH~8FBrXsYdKwcmygWXJyhc8Rj9CDPCHYlmhLSGM9odufbC79Pb3QwrMvuDmmt2r~tN1JHlzTJmhp6bNf1hd9DFJtzbpRm8ktFWr~JVfUuGZAGrhni5dcsJ6A8W6GNOCiveIG9ZmMkH0lVMdu3In9tnoy70ZLEzlgQK7XdkNtnI7Rj0ZG40rTwPHtKi9OLPrFuDEp39-3HonyaS9byxYtbLKoZMfHn6bsX7Cy7ANZiLzsJeVKKtGBs9r9kscPcS9wP-01zKn2WN0Rbw0JrZE4pxXks8ya~AakWSl7il32kgye9XuqbDOcavg9c4Pig8NsK5mzpNdGsup6XTJDQ__"
						alt=""
						className="w-full h-full object-cover"
					/>
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
