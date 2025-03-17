import React from 'react';

const TeamMemberCard = () => {
	return (
		<div className="w-[220px] h-[280px]">
			<div className="bg-white hover:bg-primary w-full h-full p-4 flex flex-col gap-3 group">
				<div className="bg-black w-full aspect-square relative">
					<img
						src="https://s3-alpha-sig.figma.com/img/28a3/30e6/61ee174151c5c20e40127ea57992a427?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H2xlHAD314I-qQynYFT2pQMYAZm0XQAHEsVxa4--qgMxau2G8~QGZ24ECz1njKB0Wzrj3LzpD~zo0tiynkoxj9IOGyAxJJv3uSmzdJKNdBRgMLELDCKawfV6vouI6ELPUpVZw3FPBHgJhmLaBTBlxYcB3C4OKNU887ddKrugPVFTR04djWA~TrBpzFU4vkFbugIL2cnZLE1HGtIehvZ6ABMDSSHqP~wR9QH5~N04GJLgjnjfupbyZrmr-Vv917kkZj66JpmrMhoovp4bNvV9xiYUGVL4TL67jLLGjhZyoVq~r88p2XR8eIzSh4GMs-IM0CNOA3NbAOdvZ-rglt0vlg__"
						alt=""
						className="absolute bottom-0 right-16 scale-x-[220%] h-[280px] group-hover:h-[300px] group-hover:scale-x-[235%] group-hover:right-[70px]"
					/>
				</div>
				<div className="text-center">
					<p className="text-primary font-bold">Dr. Aarav Sharma</p>
					<p className="text-secondary text-xs">
						CEO (Chief Executive Officer)
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
