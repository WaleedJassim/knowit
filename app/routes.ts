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
	]),
] satisfies RouteConfig;
