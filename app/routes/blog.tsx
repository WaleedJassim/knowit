import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import BlogPage from '~/pages/blog';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Blog' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Blog() {
	return (
		<>
			<BreadcrumbHeader />
			<BlogPage />
		</>
	);
}
