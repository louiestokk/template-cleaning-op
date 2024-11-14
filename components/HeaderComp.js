'use client'

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const sidor = [
  {
    title:'Städning',
    path:'#stadning'
  },
  {
    title:'Flytt',
    path:'#flytt'
  },
  {
    title:'Bortforsling',
    path:'#bortforsling'
  },
  {
    title:'Dödsbon',
    path:'#dodsbon'
  },
  {
    title:'Kontorsstäd',
    path:'#kontorsstad'
  },
  {
    title:'Kontakt',
    path:'#kontakt'
  }
]

const HeaderComp = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <div style={{width:'100%'}}>
    <AppBar position="static" style={{background:'#32de84',color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CleaningServicesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
            
            }}
          >
            Tant Rut
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {sidor.map((page,i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                <a href={page.path} title={page.title} style={{textDecoration:'none',color:'inherit'}}>
                <Typography style={{color:'black'}} sx={{ textAlign: 'center' }}>{page.title}</Typography>
                </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CleaningServicesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tant Rut
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sidor.map((page,i) => (
              <Button
              style={{color:'black'}}
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={page.path} title={page.title} style={{textDecoration:'none',color:'inherit'}}>   {page.title}</a>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Vi är försäkrade">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <img src='https://i.ibb.co/2sm1dm3/if-forsakring-removebg-preview.png' alt='if försäkring' style={{height:'30px',width:'30px'}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default HeaderComp