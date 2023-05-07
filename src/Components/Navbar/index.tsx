import React from "react";
import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem, Button, Link } from "@mui/material";
import { FaBars } from 'react-icons/fa';
import {HeaderStyled, LogoStyled, DestopMenuStyled, DesktopButtonStyled } from './style';
const pages = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library'];
const buttons = ['Sign in', 'Sign up'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
    return (
        <HeaderStyled>
            <AppBar>
            <Container>
                <Toolbar disableGutters>
                    {/* logo */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <LogoStyled>
                            <img src="images/logo.png" alt="logo" />
                        </LogoStyled>
                    </Box>

                     {/* logo */}
                     <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <LogoStyled>
                            <img src="images/logo.png" alt="logo" />
                        </LogoStyled>
                    </Box>

                    {/* mobilenav */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <FaBars />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link>
                                    <p>{page}</p>
                                </Link>
                            </MenuItem>
                            ))}
                            {buttons.map((button) => (
                            <MenuItem key={button} onClick={handleCloseNavMenu}>
                                <Link>
                                    <p>{button}</p>
                                </Link>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                   
                   
                    
                    {/* desktopnav */}
                    <Box sx={{ flexGrow: 1,marginLeft: { xs: '0', md: '20px' }, display: { xs: 'none', md: 'flex' } , justifyContent:'space-between', alignItems: 'center'}}>
                    
                    <DestopMenuStyled>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            href="#"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {page}
                            </Button>
                        ))}
                    </DestopMenuStyled>

                    <DesktopButtonStyled>
                        {buttons.map((button) => (
                            <Button
                            key={button}
                            onClick={handleCloseNavMenu}
                            href="#"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {button}
                            </Button>
                        ))}
                    </DesktopButtonStyled>


                    </Box>
        
                
                </Toolbar>
            </Container>
            </AppBar>
        </HeaderStyled>
    )
}

export default Navbar;