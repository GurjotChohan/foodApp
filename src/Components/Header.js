import { Button, Badge, Burger, Drawer, Code, Title, Anchor, Text,Image } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';
import logo from './logo.png';

const Header = () => {
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div className="logo">
                    <Image  fit="cover" src={logo} ></Image>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="Pantry" smooth duration={500}>Pantry</Link></div>
                    <div className="navbar-item"><Link to="section-two" smooth duration={500}>Recipes</Link></div>
                    <div className="navbar-item"><Link to="section-three" smooth duration={500}>FAQS</Link></div>

                    <Button color="bblue" onClick={() => redirectToLink('https://github.com/GurjotChohan')}>Other Projects</Button>
                </div>
            </div>

            <div className="content-mobile">
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>

                <Drawer
                    transition="rotate-right"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                    overlayOpacity={0.55}
                    position="right"
                    closeButtonLabel="Close drawer"
                    title="Menu"
                    padding="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    <div className="menu">
                        <div className="menu-items">
                            <div className="menu-item"><Link to="Pantry" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Pantry</Title></Link></div>
                            <div className="menu-item"><Link to="section-two" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Recipes</Title></Link></div>
                            <div className="menu-item"><Link to="section-three" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>FAQs</Title></Link></div>
                        </div>

                        <div className="menu-items">
                            <Text>Contact</Text>

                            <Anchor href="mailto:chohangurjot7@gmail.com">
                                chohangurjot7@gmail.com
                            </Anchor>
                        </div>

                        <Code color="bblue" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
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
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};