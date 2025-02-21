import { Link, useLocation } from 'react-router';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { routes } from '~/lib/constants';

const BreadcrumbHeader = () => {
	const { pathname } = useLocation();
	const pathSegments = pathname.split('/').filter(Boolean);

	return (
		<div className="bg-white p-6 text-primary">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					{pathSegments.map((segment, index) => {
						const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
						const route = routes.find((r) => r.path === path);
						const isLast = index === pathSegments.length - 1;
						const name = route?.name || segment;

						return (
							<BreadcrumbItem key={path}>
								{!isLast ? (
									<BreadcrumbLink asChild>
										<Link to={path} className="capitalize">
											{name}
										</Link>
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage>{name}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbHeader;
