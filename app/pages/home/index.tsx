import AboutUs from './components/about-us';
import Certificates from './components/certificates';
import Courses from './components/courses';
import Hero from './components/hero';
import Partners from './components/partners';
import StartYourJourney from './components/start-your-journey';
import SuccessStories from './components/success-stories';
import Vacancies from './components/vacancies';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Certificates />
			<Courses />
			<AboutUs />
			<Vacancies />
			<Partners />
			<SuccessStories />
			<StartYourJourney />
		</>
	);
};

export default HomePage;
