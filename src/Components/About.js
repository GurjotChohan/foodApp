import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    <div style={{ marginBottom: 15 }}>
                        <Text transform="uppercase" weight={500} color="sienna.4">
                            MADE WITH YOU AND THE WORLD IN MIND
                        </Text>
                    </div>

                    <div style={{ marginBottom: 15 }} className='title' >
                        <Text color="sienna.4">
                            Zero Waste: Recipe Finder
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="bblue.7">
                        A recipe generator based on what's already in your <Link className='link' to="Pantry" smooth duration={500} >Pantry & Fridge.</Link>
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="Pantry" smooth duration={500}>
                            <Button color="sienna.4" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Start Here</Button>
                        </Link>

                        <Link to="section-five" smooth duration={500}>
                        <Button variant="default" olor="sienna.4" radius="lg" size="md">Questions?</Button>
                        </Link>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;