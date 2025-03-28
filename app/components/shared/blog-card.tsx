import { ArrowUpRightIcon } from '~/assets/icons';
import BlogImage from '~/assets/dummy/blog.jpeg';
import { Link } from 'react-router';

type BlogCardProps = {
	id?: string | number;
};

const BlogCard = ({ id }: BlogCardProps) => {
	return (
		<Link to={`/blog/${id}`} className="w-full flex flex-col gap-3">
			<img src={BlogImage} alt="" />
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
		</Link>
	);
};

export default BlogCard;
