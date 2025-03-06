import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import PlacementsPage from '~/pages/placements';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Placements' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Courses() {
	return (
		<>
			<BreadcrumbHeader />
			<PlacementsPage />
		</>
	);
}
