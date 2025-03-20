import { StarIcon } from '~/assets/icons';
import type { Course } from '~/lib/dummy-data';
import { AvatarGroup } from '../ui/avatar';
import { Button } from '../ui/button';
import { Link } from 'react-router';

type CourseProps = {
	data: Course;
};

const CourseCard = ({ data }: CourseProps) => {
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
					<div className="flex items-center gap-1.5">
						<p className="text-[13px] font-medium text-[#7F7F7F]">
							{data?.rating.toFixed(1)}
						</p>
						<div className="flex items-center gap-0.5">
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<StarIcon key={index} />
								))}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="text-base flex items-center gap-2">
						<p className="font-bold">₹ {data?.discountedPrice}</p>
						<p className="line-through text-secondary">
							₹ {data?.originalPrice}
						</p>
					</div>
					<Link to={`/courses/${data.id}`}>
						<Button className="hover:bg-background hover:border-background">
							Enroll Now
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
