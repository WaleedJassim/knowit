import { Filter } from 'lucide-react';
import CourseCard from '~/components/shared/course-card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { courses } from '~/lib/dummy-data';

const filters = ['Mechanical', 'Healthcare', 'NDT', 'Infrastructure'];

const CoursesPage = () => {
	return (
		<div className="p-6 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<p className="text-lg font-medium">
					Enjoy exploring from our learining world
				</p>
				<p className="text-4xl font-bold text-(--color-primary)">
					Start learning with us
				</p>
			</div>
			<div className="bg-background flex flex-col gap-8">
				<div className="flex items-center gap-4 justify-between">
					<div className="flex items-center gap-4">
						<Input
							placeholder="Search your Course"
							className="sm:w-md rounded-2xl"
						/>
						{filters.map((item, index) => (
							<Button key={index} className="bg-white border-white">
								{item}
							</Button>
						))}
					</div>
					<Button>
						<Filter />
						Filters
					</Button>
				</div>
				<div className="flex flex-wrap gap-9">
					{courses.map((course) => (
						<CourseCard data={course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CoursesPage;
