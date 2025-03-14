import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import OurTeamPage from '~/pages/team';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Our Team' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Courses() {
	return (
		<>
			<BreadcrumbHeader />
			<OurTeamPage />
		</>
	);
}
