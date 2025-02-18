export type Student = {
	src: string;
	alt: string;
	fallback: string;
};

export type Course = {
	imageUrl: string;
	id: number;
	courseName: string;
	description: string;
	rating: number;
	discountedPrice: number;
	originalPrice: number;
	students: Student[];
};

export const courses: Course[] = [
	{
		id: 1,
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/7db3/9171/ca44522c9a39d18e49caf5af607e1696?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XQuequG8zxDMR6t29REX5378DNCAUXnUCT-OpevyZKc30A1zoL7bl0pU~e4gUoFBP~iXAcOFoHTWBsuu1SywofsIt9YSHbGXWgrDTH04Sbq5vaP5zHmKkbth0xNxLAy2avzJO85jitfj9z9PpCkEnLDf4wYIn7VUFnLSC01WjB-38aq87RWMmaBOLRUHEhZWFskR9K7HqTenfGQuo94E2U9jxtnUHZOZ6Bfs9pQHS9fonkHmFgFIMDgOEvJ2nSNRXTLAFMGjojAFgQ1I6xGWDhXmL7k0miTteCz0kgEWKWSvlt5ulUCJVdz9umCe9zF1UVCUvo2LtqW6qfe0dLlXjg__',
		courseName: 'Mechanical QA QC',
		description:
			'Mechanical QA QC Course from Ambit Automation covers all major aspects of the QA QC Course.',
		rating: 4.0,
		discountedPrice: 999,
		originalPrice: 1499,
		students: [
			{
				src: 'https://s3-alpha-sig.figma.com/img/2386/8fe3/2fe621cb5273ca12b6688301cd72e7c7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KI500cF4--yWWFnb4lDbhXAZgBvERPTBtG7~bk0Eblg-fZ45m5S7D3lIs2OsW6qCKfWCm5kOQ~oDKYAteruWXLGEBzXXRENUZ5TruZXCeWSb4Exrlt8Nt1buv5RjA2tEmV91fWq5f~UZEPHWXr~DnuiVRnT4XysgmiTkbAtVswGFs63wnG-qLtMQag9QdyMr7VOh5RVkDnPs9gDFIoZqdCSnEB5N9y6tKhiPNRnzpwSMaLQtiwDEanTTjOkR5K4hwTlV3K6LcyiHDIp~fetfgqHDHoQfbOACFFYZr-c8jLIDdyMHNMx0Y-7QPuH6WiOKwO84Ml28M4nGz~Nh8tlRPw__',
				alt: 'User 1',
				fallback: 'U1',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/bc22/9062/6c7234ac65bb2a13712b1a387fb79525?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sAkgkP4ylKoJqGNpsT-NKQ-cDpMEraLo~NeeuTQQE-YTawkTJ-hLBQK926gEzPL0UwZw71OzS-QnVxRTk1x5qqTUFW7qt8OXYW4~fJrpTXRnSII7lQnDFM9LgoPGXekRCFhuB50GVX8TPXMMLABCeU4Gkl23hkMqY0QsFtqlX6EZB9oEv2Mx4ZcfRwsrFGWda39PhJ4nPfu5IGIn05hFr2IbWXaqAnwqidE-GFbb59zGMMlJJahiURMmPPorQi7aQpTXKIfKTI6w8n0dKhToNCis81cz8HUuSStdT~Ly5I~41y63D8C7I~JQ~j7KA1behMcS9O95qgSsvLRcAfbC9A__',
				alt: 'User 2',
				fallback: 'U2',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/bc22/9062/6c7234ac65bb2a13712b1a387fb79525?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sAkgkP4ylKoJqGNpsT-NKQ-cDpMEraLo~NeeuTQQE-YTawkTJ-hLBQK926gEzPL0UwZw71OzS-QnVxRTk1x5qqTUFW7qt8OXYW4~fJrpTXRnSII7lQnDFM9LgoPGXekRCFhuB50GVX8TPXMMLABCeU4Gkl23hkMqY0QsFtqlX6EZB9oEv2Mx4ZcfRwsrFGWda39PhJ4nPfu5IGIn05hFr2IbWXaqAnwqidE-GFbb59zGMMlJJahiURMmPPorQi7aQpTXKIfKTI6w8n0dKhToNCis81cz8HUuSStdT~Ly5I~41y63D8C7I~JQ~j7KA1behMcS9O95qgSsvLRcAfbC9A__',
				alt: 'User 3',
				fallback: 'U3',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/f8fd/c7b5/52f480f3420d4c1f0a09af5a01c4723f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e4FTWZijeazMa2THlzqwjsylwzJgzeY30ZO5n0Eze8tzxLKk-MDTt6As9me051Fg0hEQTZ9s0u-4ZfV9nKwqOG8GVYfE4dycOqko-~bpl6LOkeDP7TzghS4GhOoUFsxaTMGPrTRptIgAyejjQPfV84E6ocJyQJKXiCvE9EYhW4LQot7Q7HQJA0t7nJGhkNAeXVplnsRyzflUw9fc18wSao1QjZTZCd2n2MFwdHXK5kjq2kwyVS6yGQO2ubkKzJrFvuhpTCqfBDgFYNa8B-Vc36eWc-xvSe45MfuK5OFFR7H5tVY9yc4puQgteP3nmEM1cUg-2v92xEaUAVv7eyiGTQ__',
				alt: 'User 4',
				fallback: 'U4',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/f706/92fa/93ad65ab736b95a1530fd07f86463b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K8Mq9MQx4g1Ej2RQCXXU1mbluQzGWZJYw4MkkbpN2uxoNGz5iXBcLq0t48xvN8f-8~UjgbClh62~IVu3sADvCzirWlBnpuLAzLQJujiyY58k1OqXq-bWt0EztBtlI1dBTf6hAW9y0pv1J4e3ohktafNa8VA6wTaAj0vTPUSycobXQM145HXVAQnYnoE2FzZNy6G~z8koKuEA2Hp-wEPCednnukVKsAKyVd5p-7TpOhnAir35J5Zp9TmKw~wMBfoA1TKyCWWUFU4kXIbnEyHqBYNZ-bKWmwxUFifGjqqw7hsCULMr296Rhp9j1vSNYiI3gUHGbCib7Pr3ofGV-S7X5w__',
				alt: 'User 5',
				fallback: 'U5',
			},
			{ src: 'https://github.com/shadcn.png', alt: 'User 6', fallback: 'U6' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 7', fallback: 'U7' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 8', fallback: 'U8' },
		],
	},
	{
		id: 2,
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/ceea/5d61/0d370b63bf2e6a6d60edbea9cc75f1c1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sb6DhzSnq57bJLW1PYwJJdxDJatPlraww9DBULtu11-VndDgFJXFfP8AxiKxMRUWr~P1yPLFpD29J0vK~SJw9J~PH42pqTkLf3zHCijFrPwUHTaoxvgR~ujdLpN8~LK7IAh5WN1jjldrtzpGyzTYBYlTmOO9Lp5gV~hQ6tdhdhltPjNRsMLWS3jA06~EdfeJYGammufX5T3048KUx26xwB0di1fB9EKL64u68ZeuvMm4ofpPEXzDPSHn5rTwUepoWUWC6h1UmhaPev~W1BpYpdEqsEYMuWUD0JPA3eAmPd5nafrpUZMQA8eqS2c16qHSXuHPhmP2O8dC9EPsW~592g__',
		courseName: 'Piping And pipeline Engineering',
		description:
			'Knowit Education offers the Piping Design course  The industry offers a diverse range of jobs in pipelines,',
		rating: 4.0,
		discountedPrice: 999,
		originalPrice: 1499,
		students: [
			{
				src: 'https://s3-alpha-sig.figma.com/img/2386/8fe3/2fe621cb5273ca12b6688301cd72e7c7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KI500cF4--yWWFnb4lDbhXAZgBvERPTBtG7~bk0Eblg-fZ45m5S7D3lIs2OsW6qCKfWCm5kOQ~oDKYAteruWXLGEBzXXRENUZ5TruZXCeWSb4Exrlt8Nt1buv5RjA2tEmV91fWq5f~UZEPHWXr~DnuiVRnT4XysgmiTkbAtVswGFs63wnG-qLtMQag9QdyMr7VOh5RVkDnPs9gDFIoZqdCSnEB5N9y6tKhiPNRnzpwSMaLQtiwDEanTTjOkR5K4hwTlV3K6LcyiHDIp~fetfgqHDHoQfbOACFFYZr-c8jLIDdyMHNMx0Y-7QPuH6WiOKwO84Ml28M4nGz~Nh8tlRPw__',
				alt: 'User 1',
				fallback: 'U1',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/bc22/9062/6c7234ac65bb2a13712b1a387fb79525?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sAkgkP4ylKoJqGNpsT-NKQ-cDpMEraLo~NeeuTQQE-YTawkTJ-hLBQK926gEzPL0UwZw71OzS-QnVxRTk1x5qqTUFW7qt8OXYW4~fJrpTXRnSII7lQnDFM9LgoPGXekRCFhuB50GVX8TPXMMLABCeU4Gkl23hkMqY0QsFtqlX6EZB9oEv2Mx4ZcfRwsrFGWda39PhJ4nPfu5IGIn05hFr2IbWXaqAnwqidE-GFbb59zGMMlJJahiURMmPPorQi7aQpTXKIfKTI6w8n0dKhToNCis81cz8HUuSStdT~Ly5I~41y63D8C7I~JQ~j7KA1behMcS9O95qgSsvLRcAfbC9A__',
				alt: 'User 2',
				fallback: 'U2',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/bc22/9062/6c7234ac65bb2a13712b1a387fb79525?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sAkgkP4ylKoJqGNpsT-NKQ-cDpMEraLo~NeeuTQQE-YTawkTJ-hLBQK926gEzPL0UwZw71OzS-QnVxRTk1x5qqTUFW7qt8OXYW4~fJrpTXRnSII7lQnDFM9LgoPGXekRCFhuB50GVX8TPXMMLABCeU4Gkl23hkMqY0QsFtqlX6EZB9oEv2Mx4ZcfRwsrFGWda39PhJ4nPfu5IGIn05hFr2IbWXaqAnwqidE-GFbb59zGMMlJJahiURMmPPorQi7aQpTXKIfKTI6w8n0dKhToNCis81cz8HUuSStdT~Ly5I~41y63D8C7I~JQ~j7KA1behMcS9O95qgSsvLRcAfbC9A__',
				alt: 'User 3',
				fallback: 'U3',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/f8fd/c7b5/52f480f3420d4c1f0a09af5a01c4723f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e4FTWZijeazMa2THlzqwjsylwzJgzeY30ZO5n0Eze8tzxLKk-MDTt6As9me051Fg0hEQTZ9s0u-4ZfV9nKwqOG8GVYfE4dycOqko-~bpl6LOkeDP7TzghS4GhOoUFsxaTMGPrTRptIgAyejjQPfV84E6ocJyQJKXiCvE9EYhW4LQot7Q7HQJA0t7nJGhkNAeXVplnsRyzflUw9fc18wSao1QjZTZCd2n2MFwdHXK5kjq2kwyVS6yGQO2ubkKzJrFvuhpTCqfBDgFYNa8B-Vc36eWc-xvSe45MfuK5OFFR7H5tVY9yc4puQgteP3nmEM1cUg-2v92xEaUAVv7eyiGTQ__',
				alt: 'User 4',
				fallback: 'U4',
			},
			{
				src: 'https://s3-alpha-sig.figma.com/img/f706/92fa/93ad65ab736b95a1530fd07f86463b22?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K8Mq9MQx4g1Ej2RQCXXU1mbluQzGWZJYw4MkkbpN2uxoNGz5iXBcLq0t48xvN8f-8~UjgbClh62~IVu3sADvCzirWlBnpuLAzLQJujiyY58k1OqXq-bWt0EztBtlI1dBTf6hAW9y0pv1J4e3ohktafNa8VA6wTaAj0vTPUSycobXQM145HXVAQnYnoE2FzZNy6G~z8koKuEA2Hp-wEPCednnukVKsAKyVd5p-7TpOhnAir35J5Zp9TmKw~wMBfoA1TKyCWWUFU4kXIbnEyHqBYNZ-bKWmwxUFifGjqqw7hsCULMr296Rhp9j1vSNYiI3gUHGbCib7Pr3ofGV-S7X5w__',
				alt: 'User 5',
				fallback: 'U5',
			},
			{ src: 'https://github.com/shadcn.png', alt: 'User 6', fallback: 'U6' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 7', fallback: 'U7' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 8', fallback: 'U8' },
		],
	},
];
