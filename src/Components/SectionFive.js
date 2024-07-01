import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import { MdOutlineWeb,  MdFastfood} from "react-icons/md";
import { SiFastapi } from "react-icons/si";

const SectionFive = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="sienna.4">FAQs</Badge></div>
                    <Text color="bblue.7">
                        <Title order={1} style={{ marginTop: 10 }}>Woah, Frequently asked questions here</Title>
                    </Text>
                </div>

                <Accordion variant="contained">

                    <Accordion.Item value="item3">
                        <Accordion.Control icon={<MdFastfood size={20} color={"e28369"} />}>
                            Why does this site exist?
                        </Accordion.Control>
                        <Accordion.Panel>In the United States, people waste 92 billion pounds of food annually, equal to 145 billion meals. We throw away over $473 billion worth of food annually. This is 38% of all the food in America. So, I wanted to create somthing that could help people try new recipes while being resourseful.</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="item1">
                        <Accordion.Control icon={<MdOutlineWeb size={20} color={"e28369"} />}>
                            What UI library does this site use?
                        </Accordion.Control>
                        <Accordion.Panel>This site uses Mantine. Mantine is a open source React components library. Check out more on: https://mantine.dev</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control icon={<SiFastapi size={20} color={"e28369"} />}>
                            What API is used to retrive the recipes?
                        </Accordion.Control>
                        <Accordion.Panel>Spoonacular.</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFive;