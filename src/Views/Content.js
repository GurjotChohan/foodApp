import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionThree from '../Components/SectionThree';
import SectionTwo from '../Components/SectionTwo';
import '../Styles/Content.scss';

const Content = () => {
    return (
        <>
            <About />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    )
};

export default Content;