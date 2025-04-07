import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAuthContext } from '../../context/AuthContext';

const Header = () => {
      const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productMenuOpen, setProductMenuOpen] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
      
      const handleProductMenuOpen = (event) => {
        setProductMenuOpen(event.currentTarget);
      };
      
      const handleProductMenuClose = () => {
        setProductMenuOpen(null);
      };

      const {Auth,logout} = useAuthContext();
  return (
    <div>
      
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          backgroundColor: scrolled 
            ? darkMode ? 'rgba(10, 14, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled 
            ? darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)' 
            : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #0a84ff, #80e9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#0a84ff',
                  left: '-15px',
                  animation: 'pulse 2s infinite'
                },
              }}
            >
              NeetCode
            </Typography>

            {/* Desktop menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
              <Typography 
                sx={{ 
                  fontWeight: 500, 
                  fontSize: '0.9rem', 
                  cursor: 'pointer', 
                  color: '#ffa116',
                  position: 'relative',
                  '&:hover': {
                    '&:after': {
                      width: '100%',
                    }
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-3px',
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#ffa116',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                Premium
              </Typography>
              
              <Link to="/explore" style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{ 
                    fontWeight: 500, 
                    fontSize: '0.9rem', 
                    cursor: 'pointer',
                    color: darkMode ? '#fff' : '#2d3748',
                    position: 'relative',
                    '&:hover': {
                      '&:after': {
                        width: '100%',
                      }
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: '#0a84ff',
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  Explore
                </Typography>
              </Link>
              
              <Box sx={{ position: 'relative' }}>
                <Typography 
                  sx={{ 
                    fontWeight: 500, 
                    fontSize: '0.9rem', 
                    cursor: 'pointer',
                    color: darkMode ? '#fff' : '#2d3748',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={handleProductMenuOpen}
                >
                  Product <KeyboardArrowDownIcon fontSize="small" />
                </Typography>
                <Menu
                  anchorEl={productMenuOpen}
                  open={Boolean(productMenuOpen)}
                  onClose={handleProductMenuClose}
                  elevation={0}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: darkMode ? 'rgba(20, 24, 33, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                      '& .MuiMenuItem-root': {
                        color: darkMode ? '#fff' : '#2d3748',
                      }
                    }
                  }}
                >
                  <MenuItem onClick={handleProductMenuClose}>Problems</MenuItem>
                  <MenuItem onClick={handleProductMenuClose}>Contest</MenuItem>
                  <MenuItem onClick={handleProductMenuClose}>Interview</MenuItem>
                  <MenuItem onClick={handleProductMenuClose}>Discuss</MenuItem>
                </Menu>
              </Box>
              
              {localStorage.getItem('role') === 'ADMIN' && 
              <Typography 
              sx={{ 
                fontWeight: 500, 
                fontSize: '0.9rem', 
                cursor: 'pointer',
                color: darkMode ? '#fff' : '#2d3748',
                position: 'relative',
                '&:hover': {
                  '&:after': {
                    width: '100%',
                  }
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-3px',
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#0a84ff',
                  transition: 'width 0.3s ease'
                }
              }}
            >
              <Link to={'/coursePageAdmin'} style={{textDecoration:'none',color:'#fff'}}>
                Admin Dashboard
              </Link>
            </Typography>
              }
              
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: darkMode ? '#ffffff' : '#2d3748',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(90deg)'
                  }
                }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              
             {Auth ?  <Button
                component={Link}
                variant="outlined"
                sx={{
                  borderColor: '#0a84ff',
                  color: '#0a84ff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 10px rgba(10, 132, 255, 0.3)',
                  }
                }}
                onClick={logout}
              >
                Logout
              </Button> :  <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{
                  borderColor: '#0a84ff',
                  color: '#0a84ff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 10px rgba(10, 132, 255, 0.3)',
                  }
                }}
              >
                LogIn
              </Button>}
            </Box>
            
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 2 }}>
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: darkMode ? '#ffffff' : '#2d3748',
                }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile menu drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: '300px',
            background: darkMode ? 'rgba(10, 14, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #0a84ff, #80e9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            LeetCode
          </Typography>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: darkMode ? '#ffffff' : '#2d3748' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem button sx={{ py: 1.5 }}>
            <ListItemText 
              primary="Premium" 
              primaryTypographyProps={{ 
                sx: { 
                  color: '#ffa116', 
                  fontWeight: 600 
                } 
              }} 
            />
          </ListItem>
          
          <ListItem button component={Link} to="/explore" sx={{ py: 1.5 }}>
            <ListItemText 
              primary="Explore" 
              primaryTypographyProps={{ 
                sx: { 
                  color: darkMode ? '#ffffff' : '#2d3748',
                  fontWeight: 500
                } 
              }} 
            />
          </ListItem>
          
          <ListItem button sx={{ py: 1.5 }}>
            <ListItemText 
              primary="Product" 
              primaryTypographyProps={{ 
                sx: { 
                  color: darkMode ? '#ffffff' : '#2d3748',
                  fontWeight: 500
                } 
              }} 
            />
            <KeyboardArrowDownIcon />
          </ListItem>
          
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Problems', 'Contest', 'Interview', 'Discuss'].map((item) => (
                <ListItem button key={item} sx={{ py: 1, pl: 4 }}>
                  <ListItemText 
                    primary={item} 
                    primaryTypographyProps={{ 
                      sx: { 
                        color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(45, 55, 72, 0.7)',
                        fontSize: '0.9rem',
                      } 
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
          
          <ListItem button sx={{ py: 1.5 }}>
            <ListItemText 
              primary="Developer" 
              primaryTypographyProps={{ 
                sx: { 
                  color: darkMode ? '#ffffff' : '#2d3748',
                  fontWeight: 500
                } 
              }} 
            />
          </ListItem>


          
          {
            Auth ?  <ListItem sx={{ pt: 2 }}>
            <Button
              component={Link}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#0a84ff',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '8px',
                padding: '10px 20px',
                '&:hover': { backgroundColor: '#0065cc' },
              }}
              onClick={logout}
            >
              Logout
            </Button>
          </ListItem> :
          <ListItem sx={{ pt: 4 }}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#0a84ff',
              color: '#0a84ff',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '10px 20px',
            }}
          >
            Sign in
          </Button>
        </ListItem>
          }
          
          
         
        </List>
      </Drawer>
    </div>
  )
}

export default Header
