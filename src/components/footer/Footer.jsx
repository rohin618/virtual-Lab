import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const Footer = () => {
     const [darkMode, setDarkMode] = useState(true);
  return (
    <Box 
      sx={{ 
        py: 6,
        borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
        backgroundColor: '#0a0e17' 
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
  )
}

export default Footer
