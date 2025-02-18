import AboutUs from './components/about-us';
import Certificates from './components/certificates';
import Courses from './components/courses';
import Hero from './components/hero';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Certificates />
			<Courses />
			<AboutUs />
		</>
	);
};

export default HomePage;
