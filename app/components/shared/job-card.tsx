import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const JobCard = () => {
	return (
		<div className="border border-[#1414140D] rounded-lg p-6 text-secondary">
			<div className="flex items-start gap-6">
				<div className="w-[72px] h-[72px] rounded-sm overflow-hidden">
					<img
						src="https://s3-alpha-sig.figma.com/img/d12d/6739/2dc95162474d80554696fca0be6144bc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PdEwl2sTSvtmjD7NdhCitr-UyOzwGUvD7ucr4ea-LHpKVpb3mf~8MxAs0RwsaKWxp-IyEsLn~E~bExTgjyh0E6HeVoiDEwT6CY-Ec7uLfT27ooFePbAPWSH9gHfFGMgyuyP43RN-kryquqvW4a2uomLeJ~J-zy5fOq1oSRzlHTW4TpY4rmM1giAzu1meHbANbAYR-QODgV~P4XHrkG3B3SEthGQxnPszbNMQrqcJAEqC5YbIAiFYpc07vEP7Yty-a10KJboOyYt6LW4xF-UF8DQDtEz0Mmd8WPFWhOvg6sM6P342SBROrgw4n4zUovSSpbEXbNEAC45XY-0zsOcB-w__"
						alt=""
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
							<ExternalLink />
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
