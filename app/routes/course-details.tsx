import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import CourseDetailsPage from '~/pages/course-details';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Vacancy Details' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function CourseDetails() {
	return (
		<>
			<BreadcrumbHeader />
			<CourseDetailsPage />
		</>
	);
}
