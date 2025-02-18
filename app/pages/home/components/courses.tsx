import CourseCard from '~/components/shared/course-card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { courses } from '~/lib/dummy-data';

const filters = ['Mechanical', 'Healthcare', 'NDT', 'Infrastructure'];

const Courses = () => {
	return (
		<div className="bg-white pb-2">
			<div className="bg-background px-6 py-16 flex flex-col gap-6">
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
					<Button>See All</Button>
				</div>
				<div className="flex gap-9">
					{courses.map((course) => (
						<CourseCard data={course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Courses;
