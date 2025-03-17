import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import zIndex from '@mui/material/styles/zIndex';

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: 'Projects', path: '/projects' },
        { label: 'Learning', path: '/learning' },
    ];

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black', zIndex: 1200}}>
            <Toolbar>
                {/* Logo Section */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        color: 'white',
                        display: { xs: 'block' },
                    }}
                >
                    Company Logo
                </Typography>

                {/* Desktop Navigation Menu */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: 4,
                    }}
                >
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.path} passHref>
                            <Typography
                                sx={{
                                    color: router.pathname === item.path ? 'white' : 'gray',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    '&:hover': { color: 'white' },
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Link>
                    ))}
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} sx={{ padding: 0 }}>
                                <Link href={item.path} passHref>
                                    <Typography
                                        sx={{
                                            padding: '16px', // Adds vertical space
                                            marginBottom: '8px', // Adds additional gap between items
                                            color: router.pathname === item.path ? 'white' : 'gray',
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                            '&:hover': { color: 'white' },
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Divider
                sx={{
                    borderColor: 'gray',
                    opacity: 0.3,
                    margin: { xs: '5px 0', md: '5px 0' },
                }}
            />
        </AppBar>
    );
};

export default Header;
