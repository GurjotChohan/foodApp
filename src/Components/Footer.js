import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.bblue[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">A Simple Recipe Finder Website</Text>

                        <Text color="white" mb="5px">
                            This website allows you to explore diffrent recipes that you can make by using your current ingredients. 
                        </Text>

                        <Text color="white" mb="20px">
                            You can find the API I used on <Anchor href="https://spoonacular.com/food-api">Spoonacular</Anchor>
                        </Text>

                        <Button variant="white" color="bblue" onClick={() => redirectToLink('https://gurjotchohan.netlify.app/portfolio')}>My Portfiolo</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            Made By:
                            <Anchor href="https://github.com/GurjotChohan">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="bblue">GC</Avatar>
                                        <div>
                                            <Text>Gurjot Chohan</Text>
                                            <Text size="xs" color="dimmed">chohangurjot7@gmail.com</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};