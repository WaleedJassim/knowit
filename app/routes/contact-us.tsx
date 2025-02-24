import BreadcrumbHeader from '~/components/shared/breadcrumb-header';
import ContactUsPage from '~/pages/contact-us';
import type { Route } from './+types/courses';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Courses' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function ContactUs() {
	return (
		<>
			<BreadcrumbHeader />
			<ContactUsPage />
		</>
	);
}
