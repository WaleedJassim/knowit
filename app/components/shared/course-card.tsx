import type { Course } from '~/lib/dummy-data';
import { AvatarGroup } from '../ui/avatar';
import { Button } from '../ui/button';

const CourseCard = ({ data }: { data: Course }) => {
	return (
		<div className="bg-white w-72 rounded-[14px] overflow-hidden text-primary flex flex-col gap-6 hover:scale-105">
			<div className="relative">
				<img src={data?.imageUrl} alt={data?.courseName} />
				<AvatarGroup
					avatars={data?.students}
					maxDisplay={5}
					avatarType="students"
					className="absolute left-1/2 transform -translate-x-1/2 bg-[#FEED9F] w-max px-2 py-1 rounded-full bottom-[-20px]"
				/>
			</div>
			<div className="p-3 flex flex-col gap-6">
				<div className="flex gap-1 flex-col">
					<p className="text-base font-extrabold">{data?.courseName}</p>
					<p className="text-sm">{data?.description}</p>
					<p className="text-[13px] font-medium text-[#7F7F7F]">
						{data?.rating}
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="text-base flex items-center gap-2">
						<p className="font-bold">₹ {data?.discountedPrice}</p>
						<p className="line-through text-secondary">
							₹ {data?.originalPrice}
						</p>
					</div>
					<Button className="hover:bg-background hover:border-background">
						Enroll Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
