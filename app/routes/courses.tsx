import CoursesPage from '~/pages/courses';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Courses' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Courses() {
	return <CoursesPage />;
}
