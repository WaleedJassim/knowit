import Course1 from '~/assets/dummy/course-1.png';
import Person1 from '~/assets/dummy/person-1.jpeg';
import Person2 from '~/assets/dummy/person-2.jpeg';
import Person3 from '~/assets/dummy/person-3.jpeg';
import Person4 from '~/assets/dummy/person-4.jpeg';
import Person5 from '~/assets/dummy/person-5.jpeg';

export type Student = {
	src: string;
	alt: string;
	fallback: string;
};

export type Course = {
	imageUrl: string;
	id: number;
	courseName: string;
	description: string;
	rating: number;
	discountedPrice: number;
	originalPrice: number;
	students: Student[];
};

export const courses: Course[] = [
	{
		id: 1,
		imageUrl: Course1,
		courseName: 'Mechanical QA QC',
		description:
			'Mechanical QA QC Course from Ambit Automation covers all major aspects of the QA QC Course.',
		rating: 4.0,
		discountedPrice: 999,
		originalPrice: 1499,
		students: [
			{
				src: Person1,
				alt: 'User 1',
				fallback: 'U1',
			},
			{
				src: Person2,
				alt: 'User 2',
				fallback: 'U2',
			},
			{
				src: Person3,
				alt: 'User 3',
				fallback: 'U3',
			},
			{
				src: Person4,
				alt: 'User 4',
				fallback: 'U4',
			},
			{
				src: Person5,
				alt: 'User 5',
				fallback: 'U5',
			},
			{ src: 'https://github.com/shadcn.png', alt: 'User 6', fallback: 'U6' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 7', fallback: 'U7' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 8', fallback: 'U8' },
		],
	},
	{
		id: 2,
		imageUrl: Course1,
		courseName: 'Piping And pipeline Engineering',
		description:
			'Knowit Education offers the Piping Design course  The industry offers a diverse range of jobs in pipelines,',
		rating: 4.0,
		discountedPrice: 999,
		originalPrice: 1499,
		students: [
			{
				src: Person1,
				alt: 'User 1',
				fallback: 'U1',
			},
			{
				src: Person2,
				alt: 'User 2',
				fallback: 'U2',
			},
			{
				src: Person3,
				alt: 'User 3',
				fallback: 'U3',
			},
			{
				src: Person4,
				alt: 'User 4',
				fallback: 'U4',
			},
			{
				src: Person5,
				alt: 'User 5',
				fallback: 'U5',
			},
			{ src: 'https://github.com/shadcn.png', alt: 'User 6', fallback: 'U6' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 7', fallback: 'U7' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 8', fallback: 'U8' },
		],
	},
	{
		id: 3,
		imageUrl: Course1,
		courseName: 'Piping And pipeline Engineering',
		description:
			'Knowit Education offers the Piping Design course  The industry offers a diverse range of jobs in pipelines,',
		rating: 4.0,
		discountedPrice: 999,
		originalPrice: 1499,
		students: [
			{
				src: Person1,
				alt: 'User 1',
				fallback: 'U1',
			},
			{
				src: Person2,
				alt: 'User 2',
				fallback: 'U2',
			},
			{
				src: Person3,
				alt: 'User 3',
				fallback: 'U3',
			},
			{
				src: Person4,
				alt: 'User 4',
				fallback: 'U4',
			},
			{
				src: Person5,
				alt: 'User 5',
				fallback: 'U5',
			},
			{ src: 'https://github.com/shadcn.png', alt: 'User 6', fallback: 'U6' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 7', fallback: 'U7' },
			{ src: 'https://github.com/shadcn.png', alt: 'User 8', fallback: 'U8' },
		],
	},
];
