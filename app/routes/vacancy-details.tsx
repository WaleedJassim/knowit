import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import VacancyDetailsPage from '~/pages/vacancy-details';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Vacancy Details' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function ContactUs() {
	return (
		<>
			<BreadcrumbHeader />
			<VacancyDetailsPage />
		</>
	);
}
