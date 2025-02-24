import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import VacanciesPage from '~/pages/vacancies';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Vacancies' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function ContactUs() {
	return (
		<>
			<BreadcrumbHeader />
			<VacanciesPage />
		</>
	);
}
