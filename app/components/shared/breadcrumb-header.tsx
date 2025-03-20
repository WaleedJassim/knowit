import { Link, useLocation } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
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
		<div className="bg-[#F1F2F4] p-6 text-primary md:block hidden">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>

					{pathSegments.map((segment, index) => {
						const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
						const route = routes.find((r) => r.path === path);
						const isLast = index === pathSegments.length - 1;
						const isID = !isNaN(Number(segment)); // Check if segment is a number (ID)

						return (
							<Fragment key={path}>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									{!isLast ? (
										<BreadcrumbLink asChild>
											<Link to={path} className="capitalize">
												{isID ? `${segment}` : route?.name || segment}
											</Link>
										</BreadcrumbLink>
									) : (
										<BreadcrumbPage>
											{isID ? `${segment}` : route?.name || segment}
										</BreadcrumbPage>
									)}
								</BreadcrumbItem>
							</Fragment>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbHeader;
