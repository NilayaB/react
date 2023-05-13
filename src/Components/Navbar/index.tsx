import React from "react";
import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem, Button, Link } from "@mui/material";
import { FaBars } from 'react-icons/fa';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {HeaderStyled, LogoStyled, DestopMenuStyled, DesktopButtonStyled } from './style';
const pages = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library'];
const buttons = ['Sign in', 'Sign up'];


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }
  
  function ScrollColor(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
        style: {
            backgroundColor: trigger ? "#042C54" : "transparent",
            color: trigger ? "white" : "black",
            transition: trigger ? "0.3s" : "0.5s",
            boxShadow: trigger? "box-shadow: rgba(4, 44, 84, 0.45) 0px 25px 20px -20px" : "none",
            margin:trigger ? "0" : "40px 0 0",
            padding:trigger ? "30px 0" : "0"
          }
      });
  }


const Navbar = (props: Props) => {  

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
    return (
        <HeaderStyled>
            <ScrollColor {...props}>
                <AppBar>
                <Container>
                    <Toolbar disableGutters>
                        {/* logo */}
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }}}>
                            <LogoStyled>
                                <img src="../react/images/logo.png" alt="logo" />
                            </LogoStyled>
                        </Box>

                        {/* logo */}
                        <Box sx={{ display: { xs: 'flex', lg: 'none' }}}>
                            <LogoStyled>
                                <img src="../react/images/logo.png" alt="logo" />
                            </LogoStyled>
                        </Box>

                        {/* mobilenav */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent:'flex-end' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                className="toggle_btn"                                
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
                                display: { xs: 'block', lg: 'none' },
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
                        <Box sx={{ flexGrow: 1,marginLeft: { xs: '0', lg: '20px' }, display: { xs: 'none', lg: 'flex' } , justifyContent:'space-between', alignItems: 'center'}}>
                        
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
            </ScrollColor>
        </HeaderStyled>
    )
}

export default Navbar;