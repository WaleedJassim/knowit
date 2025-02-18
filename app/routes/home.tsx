import HomePage from '~/pages/home';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Knowit' },
		{ name: 'description', content: 'Professional Learning App' },
	];
}

export default function Home() {
	return <HomePage />;
}
