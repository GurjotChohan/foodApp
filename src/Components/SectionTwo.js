import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';
import { Context } from "./Context";
import React, { useContext } from "react";
const SectionTwo = () => {
    const theme = useMantineTheme();
    const { items, setItems } = useContext(Context);
    return (
        <section id="section-two">
            <Container>
                <Text color="black" align="center">
                    <Title color='bblue.7' order={1} mb="15px" p='15px'>Recipes Results</Title>
                </Text>

                <Grid>
                {items.map(recipe => {
                return <Grid.Col xs={12} sm={4} md={4} lg={4} key={recipe.id}>
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={recipe.image} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>{recipe.title}</Text>
                            </Group>
                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Badge color="sienna.4" variant="light">
                                    Ingredients used: {recipe.usedIngredientCount}
                                </Badge>
                                <Badge color="cblue" variant="light">
                                    Ingredients missing: {recipe.missedIngredientCount}
                                </Badge>
                            </Group>
                            <Button  color="bblue" fullWidth mt="14px" 
                                    onClick={() => {window.open(recipe.sourceUrl, "_blank")}}
                            >
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>
                })}
                    

                    
                </Grid>

            </Container>
        </section>
    );
};

export default SectionTwo;