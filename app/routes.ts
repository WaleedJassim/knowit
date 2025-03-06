import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes';

export default [
	layout('./pages/layout.tsx', [
		index('./routes/home.tsx'),
		route('/courses', './routes/courses.tsx'),
		route('/contact', './routes/contact-us.tsx'),
		route('/vacancies', './routes/vacancies.tsx'),
		route('/blog', './routes/blog.tsx'),
		route('/placements', './routes/placements.tsx'),
	]),
] satisfies RouteConfig;
