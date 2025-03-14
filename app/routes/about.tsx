import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import AboutUsPage from '~/pages/about-us';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'About Us' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Courses() {
	return (
		<>
			<BreadcrumbHeader />
			<AboutUsPage />
		</>
	);
}
