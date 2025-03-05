import BlogCard from '~/components/shared/blog-card';

const BlogPage = () => {
	return (
		<div className="p-6 flex flex-col gap-6">
			<p className="font-semibold text-2xl text-(--color-primary)">
				All blog posts
			</p>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-6">
				{Array(6)
					.fill(6)
					.map((_, index) => (
						<BlogCard key={index} />
					))}
			</div>
		</div>
	);
};

export default BlogPage;
