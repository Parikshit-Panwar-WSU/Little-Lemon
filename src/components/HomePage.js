import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from './About';

const HomePage = (props) => {
    return (
        <>
            <HeroSection
                pageMode={props.pageMode}
                updatePage={props.updatePage} />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
}

export default HomePage;