import type { Route } from './+types/home';
import HomePage from '~/pages/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Knowit' },
    { name: 'description', content: 'Professional Learning App' },
  ];
}

export default function Home() {
  return <HomePage />;
}
