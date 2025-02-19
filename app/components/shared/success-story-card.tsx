import { QuotesIcon } from '~/assets/icons';

const SuccessStoryCard = () => {
	return (
		<div className="bg-background p-6 relative flex gap-6 rounded-2xl text-white">
			<div className="absolute top-4 right-4">
				<QuotesIcon />
			</div>
			<div className="w-[277px] h-[302px] rounded-lg overflow-hidden">
				<img
					src="https://s3-alpha-sig.figma.com/img/6ab1/e9ee/ba2b62b7f2feee23310356c64dcc3dee?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CzKJmIJYcFRZQMe2GGqyxkPOwy6g~deKTprej~ydKoU2MwNhOycakLU~aBH16~I1cWkJUAT4~P4CwYe5PdUeLVmaex8ounFb08pMUwcxEWyMwlJFCUuhkbtG3VYrX45beCsMjasSSLdy33sQwR2Vpez82RyvfEJ9JA9zYg3034hkC6qUeTqZFrm2nkpHSoc-ckAqhd0ospmLnLnr7naZeQeYJAfcrqHb1lZPawNjtFK61zhqdzC~DCKI6zKu39MEGvFygAonhJnbNOvQI3xxUcZVAbef8OuP0gQZkVUppLH-hfspdnMG2r4~zqtqQlvj9tFPFIFTowPcT8PRyJWA2Q__"
					alt=""
					className="w-full h-auto"
				/>
			</div>
			<div className="flex flex-col gap-4 w-[60%]">
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
