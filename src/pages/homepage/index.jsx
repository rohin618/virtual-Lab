// LeetCodeHomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import './homepage.css';

// Particle animation component
const ParticleBackground = () => {
  return (
    <div className="particle-container">
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 10 + 1}px`,
            height: `${Math.random() * 10 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1
          }}
        />
      ))}
    </div>
  );
};

// Feature card component
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <Paper 
      elevation={0}
      className="feature-card"
      sx={{ 
        p: 3, 
        height: '100%',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(${color}, 0.2))`,
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box 
          sx={{ 
            p: 1, 
            borderRadius: '12px', 
            width: 'fit-content', 
            mb: 2,
            background: `rgba(${color}, 0.1)`,
            color: `rgb(${color})`,
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            background: `linear-gradient(135deg, rgb(${color}), #fff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {description}
        </Typography>
        <Button 
          variant="text" 
          sx={{ 
            mt: 2, 
            alignSelf: 'flex-start', 
            color: `rgb(${color})`,
            textTransform: 'none',
            '&:hover': {
              background: `rgba(${color}, 0.1)`,
            }
          }}
        >
          Learn More
        </Button>
      </Box>
    </Paper>
  );
};

// Testimonial component
const Testimonial = ({ avatar, name, role, content }) => {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 3, 
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          background: 'rgba(255, 255, 255, 0.07)',
        }
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.8)', 
          mb: 3,
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}
      >
        "{content}"
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            overflow: 'hidden',
            mr: 2,
            background: 'linear-gradient(135deg, #0a84ff, #80e9ff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          {name.charAt(0)}
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            {role}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

// Main component
const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('.section');
      let currentSection = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = index;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const handleProductMenuOpen = (event) => {
    setProductMenuOpen(event.currentTarget);
  };
  
  const handleProductMenuClose = () => {
    setProductMenuOpen(null);
  };

  // Mock data for features
  const features = [
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Interactive Coding Challenges",
      description: "Solve real-world coding problems from top tech companies. Practice with over 2,000 challenges across 20+ programming languages.",
      color: "10, 132, 255"
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Structured Learning Paths",
      description: "Follow curated learning paths designed by industry experts. Master algorithms, data structures, and system design concepts step by step.",
      color: "255, 69, 58"
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Weekly Contests",
      description: "Test your skills in weekly coding competitions. Compete globally and track your progress with real-time rankings and performance analytics.",
      color: "255, 161, 22"
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Global Programmer Community",
      description: "Connect with millions of developers worldwide. Share solutions, discuss approaches, and learn from peers in our vibrant community forums.",
      color: "48, 209, 88"
    }
  ];
  
  // Mock data for testimonials
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer at Google",
      content: "LeetCode was instrumental in helping me land my dream job. The platform's diverse problem set and detailed explanations improved my problem-solving skills significantly."
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer at Amazon",
      content: "The structured learning paths helped me master complex algorithms. I went from struggling with basic problems to confidently solving hard challenges in just a few months."
    },
    {
      name: "Michael Chen",
      role: "Recent CS Graduate",
      content: "As a student, LeetCode helped bridge the gap between academic knowledge and practical coding skills. The weekly contests kept me motivated throughout my learning journey."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#0a0e17' : '#f7f9fc',
        color: darkMode ? '#ffffff' : '#2d3748',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background effects */}
      {darkMode && <ParticleBackground />}
      <div className="gradient-sphere gradient-sphere-1"></div>
      <div className="gradient-sphere gradient-sphere-2"></div>
      <div className="gradient-sphere gradient-sphere-3"></div>
      
      {/* Navigation dots */}
      <Box
        sx={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid #0a84ff',
              backgroundColor: activeSection === index ? '#0a84ff' : 'transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
            onClick={() => {
              const sections = document.querySelectorAll('.section');
              sections[index].scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </Box>

      {/* Navbar */}
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
              LeetCode
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
                Developer
              </Typography>
              
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
              
              <Button
                component={Link}
                to="/signin"
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
                Sign in
              </Button>
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
          
          <ListItem sx={{ pt: 4 }}>
            <Button
              component={Link}
              to="/signin"
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
          
          <ListItem sx={{ pt: 2 }}>
            <Button
              component={Link}
              to="/signup"
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
            >
              Create Account
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box 
        className="section"
        sx={{ 
          pt: { xs: 20, md: 25 }, 
          pb: { xs: 10, md: 15 }, 
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                className="animate-fade-in"
                sx={{
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(10, 132, 255, 0.2)',
                    top: '-40px',
                    left: '-20px',
                    filter: 'blur(30px)',
                  }
                }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  className="hero-title"
                  sx={{ 
                    fontWeight: 800, 
                    color: darkMode ? '#ffffff' : '#2d3748', 
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Code. Learn.
                  <Typography 
                    component="span" 
                    variant="inherit" 
                    sx={{
                      display: 'block',
                      background: 'linear-gradient(90deg, #0a84ff, #80e9ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Excel.
                  </Typography>
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568', 
                    mb: 4, 
                    maxWidth: '600px',
                    fontSize: { xs: '1rem', md: '1.2rem' }, 
                    lineHeight: 1.6,
                    position: 'relative',
                  }}
                >
                  Join millions of developers mastering coding challenges, 
                  preparing for tech interviews, and building their programming skills.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#0a84ff',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      borderRadius: '8px',
                      boxShadow: '0 10px 20px rgba(10, 132, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { 
                        backgroundColor: '#0a84ff',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 30px rgba(10, 132, 255, 0.4)',
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'all 0.6s ease',
                      },
                      '&:hover:before': {
                        left: '100%',
                      }
                    }}
                  >
                    Get Started Free
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(10, 132, 255, 0.3)',
                      color: darkMode ? '#ffffff' : '#0a84ff',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        borderColor: '#0a84ff',
                        backgroundColor: 'rgba(10, 132, 255, 0.05)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    Explore Challenges
                  </Button>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 6, gap: 3 }}>
                  <Typography variant="body2" sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(45, 55, 72, 0.6)' }}>
                    Trusted by developers at:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    {['Google', 'Meta', 'Amazon', 'Microsoft'].map((company) => (
                      <Typography 
                        key={company} 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 600,
                          color: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(45, 55, 72, 0.8)',
                        }}

                       
                      
                    >
                      {company}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              className="animate-float"
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '400px' },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Code editor mockup */}
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: darkMode ? '#151b28' : '#f8fafc',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                }}
              >
                {/* Editor header */}
                <Box sx={{ 
                  p: 2, 
                  borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Typography variant="subtitle2" sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(45, 55, 72, 0.7)' }}>
                    Two Sum - LeetCode Challenge
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                {/* Editor content */}
                <Box sx={{ p: 2, height: 'calc(100% - 60px)', display: 'flex' }}>
                  <Box sx={{ width: '30px', borderRight: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)', pr: 1 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <Typography 
                        key={num} 
                        variant="caption" 
                        sx={{ 
                          display: 'block', 
                          color: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(45, 55, 72, 0.3)',
                          lineHeight: '24px',
                          textAlign: 'right',
                        }}
                      >
                        {num}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ pl: 2, width: 'calc(100% - 30px)' }}>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontFamily: 'monospace', 
                        whiteSpace: 'pre-wrap',
                        color: darkMode ? '#f8fafc' : '#334155',
                        lineHeight: '24px',
                      }}
                    >
                      {`class Solution:
  def twoSum(self, nums, target):
      """
      :type nums: List[int]
      :type target: int
      :rtype: List[int]
      """
      # Create a hash map
      hash_map = {}
      
      # Iterate through the array
      for i, num in enumerate(nums):
          complement = target - num
          
          # Check if complement exists in hash map
          if complement in hash_map:
              return [hash_map[complement], i]
              
          # Add current number to hash map
          hash_map[num] = i`}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Features Section */}
    <Box 
      className="section"
      sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative' 
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10, position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#0a84ff', 
              fontWeight: 600,
              letterSpacing: '3px',
              mb: 2,
              display: 'block',
            }}
          >
            WHY CHOOSE LEETCODE
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              color: darkMode ? '#ffffff' : '#2d3748',
              mb: 3,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Supercharge Your Coding Skills
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Access everything you need to excel in technical interviews and competitive programming all in one platform.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Testimonials Section */}
    <Box 
      className="section"
      sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative' 
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10, position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#0a84ff', 
              fontWeight: 600,
              letterSpacing: '3px',
              mb: 2,
              display: 'block',
            }}
          >
            SUCCESS STORIES
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              color: darkMode ? '#ffffff' : '#2d3748',
              mb: 3,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            From Our Community
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Join thousands of developers who have transformed their careers with LeetCode.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Testimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Stats Section */}
    <Box 
      className="section"
      sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative',
        backgroundColor: darkMode ? 'rgba(10, 14, 23, 0.5)' : 'rgba(248, 250, 252, 0.8)',
        borderRadius: '16px',
        mx: { xs: 2, md: 6 },
        my: { xs: 5, md: 10 },
        backdropFilter: 'blur(10px)',
        border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                color: darkMode ? '#ffffff' : '#2d3748',
                mb: 3,
              }}
            >
              The Numbers Speak for Themselves
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Join the world's largest coding community and take your programming skills to the next level.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#0a84ff',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 'bold',
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  backgroundColor: '#0a84ff',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(10, 132, 255, 0.3)',
                },
              }}
            >
              Get Started Free
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {[
                { number: '2,000+', label: 'Coding Challenges' },
                { number: '20+', label: 'Programming Languages' },
                { number: '3M+', label: 'Registered Users' },
                { number: '100M+', label: 'Submissions' }
              ].map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      background: darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1,
                        background: 'linear-gradient(90deg, #0a84ff, #80e9ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Call to Action Section */}
    <Box 
      className="section"
      sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            fontWeight: 800, 
            color: darkMode ? '#ffffff' : '#2d3748',
            mb: 3,
          }}
        >
          Ready to Start Your Coding Journey?
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
            mb: 6,
            lineHeight: 1.6,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          Join our community of passionate developers, showcase your skills, and prepare for your next coding interview.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#0a84ff',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              py: 1.5,
              px: 6,
              fontSize: '1.1rem',
              borderRadius: '8px',
              boxShadow: '0 10px 20px rgba(10, 132, 255, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': { 
                backgroundColor: '#0a84ff',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 30px rgba(10, 132, 255, 0.4)',
              },
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transition: 'all 0.6s ease',
              },
              '&:hover:before': {
                left: '100%',
              }
            }}
          >
            Create Free Account
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(10, 132, 255, 0.3)',
              color: darkMode ? '#ffffff' : '#0a84ff',
              textTransform: 'none',
              fontWeight: 'bold',
              py: 1.5,
              px: 6,
              fontSize: '1.1rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': { 
                borderColor: '#0a84ff',
                backgroundColor: 'rgba(10, 132, 255, 0.05)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            View Free Problems
          </Button>
        </Box>
      </Container>
    </Box>

    {/* Footer */}
    <Box 
      sx={{ 
        py: 6,
        borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #0a84ff, #80e9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              LeetCode
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#4a5568',
                mb: 2,
                maxWidth: '300px',
              }}
            >
              Leading platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
                <Typography 
                  key={social} 
                  variant="body2" 
                  sx={{ 
                    color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(45, 55, 72, 0.5)',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#0a84ff',
                    }
                  }}
                >
                  {social}
                </Typography>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Product',
                  links: ['Problems', 'Contests', 'Discuss', 'Articles', 'Premium']
                },
                {
                  title: 'Company',
                  links: ['About', 'Careers', 'Blog', 'Privacy', 'Terms']
                },
                {
                  title: 'Resources',
                  links: ['Help Center', 'API', 'Status', 'Contact Us', 'Advertise']
                }
              ].map((section, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600, 
                      color: darkMode ? '#ffffff' : '#2d3748',
                      mb: 3,
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.links.map((link) => (
                    <Typography 
                      key={link} 
                      variant="body2" 
                      sx={{ 
                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : '#4a5568',
                        mb: 1.5,
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#0a84ff',
                        }
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(45, 55, 72, 0.5)',
            }}
          >
            © {new Date().getFullYear()} LeetCode. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
              <Typography 
                key={policy} 
                variant="body2" 
                sx={{ 
                  color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(45, 55, 72, 0.5)',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#0a84ff',
                  }
                }}
              >
                {policy}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);
};

export default HomePage;