import React from 'react';
import { ArrowUpRightIcon } from '~/assets/icons';

const BlogCard = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<img
				src="https://s3-alpha-sig.figma.com/img/1dbe/c0d5/f6da91c07c650b2d1c876a5d2e55e9be?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fh3q9XoqJvnYHGSQ6J1E4Zn3ZO8IPs-8nCsmMF4w1bY5oQz3vAtufuIT0wVm7W~uAa~4hkbHk0FTlGVr-zgFolniv~wGTdZFSs46OQfPv0QilEqh520~ZSTOFobCAFgLevzLx0ktFK4YWe7LUnDjj0bmDENvYzRF8tCURAZaFfFVZIM02ot43MF1DIiWX4Uzwq9-lX~IDrO65e-~~2cMbZig2F4~GVAnfoU7eTHmMgrZ4vurWCiZ80dNEHEWubWKUIMI0g7RpZlX8ZmiY3mF200TV7XVHO99ZvTaPzpkL4bLnJz7-zwmqWlN8-IhubFDJCCJMObVsinhb79LevA8EQ__"
				alt=""
			/>
			<p className="font-semibold text-sm">Alec Whitten • 1 Jan 2025</p>
			<div className="flex items-center gap-2 justify-between">
				<p className="font-semibold text-2xl text-(--color-primary)">
					CAD in Mechanical Design
				</p>
				<div className="p-2">
					<ArrowUpRightIcon />
				</div>
			</div>
			<p>
				As welding materials continue to evolve, new advancements promise better
				strength, durability..
			</p>
		</div>
	);
};

export default BlogCard;
