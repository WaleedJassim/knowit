import { QuotesIcon } from '~/assets/icons';
import { cn } from '~/lib/utils';

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
				<img
					src="https://s3-alpha-sig.figma.com/img/6ab1/e9ee/ba2b62b7f2feee23310356c64dcc3dee?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Le2oLUpdHd9J2w~Lu8Zy26KGhu87j-yK9F8hA-TYTZtinoZ2FZZdW~iaePKytJkOK7ZK3yHefUCBnWfAQFtxwJyu1t28sCyxz64u9kGbO4U4AhcVdGw7V-leWg-CddeobrwlsOpyQraL~3NLU-E5MdkJrLRfHGqfP~2WAOqn312rtjZvvf9-bLoLMUkGZefqMoXup0qegCjd0ryemDUIYKYASh1Ut4j8CRAH~~3Yh3RFUpKeBVaG2YLe79YquY0g0vGtC22xprjHUhf9zYD1L0XVghrr5k9hR78pPEN1x3KFvNt-4-8MZXaYvJU2MrFCVt1G80cm0Pa0NYMbP~NaGA__"
					alt=""
					className="w-full h-auto"
				/>
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
