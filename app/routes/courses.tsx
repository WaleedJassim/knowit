import CoursesPage from '~/pages/courses';
import type { Route } from './+types/courses';
import BreadcrumbHeader from '~/components/shared/breadcrumb-header';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Courses' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Courses() {
	return (
		<>
			<BreadcrumbHeader />
			<CoursesPage />
		</>
	);
}
