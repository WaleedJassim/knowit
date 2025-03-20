import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import BlogDetailsPage from '~/pages/blog-details';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Blog Details' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function BlogDetails() {
	return (
		<>
			<BreadcrumbHeader />
			<BlogDetailsPage />
		</>
	);
}
