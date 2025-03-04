import { Box } from '@mui/material'
import React from 'react'
import './homepage.css'
import encryptImg from '../../assets/encrypImg.webp'

const HomePage = () => {
  return (
    <div className='hero_sec'>
      <Box sx={{display:'flex'}}>
        <Box>
            <div>
              <h1>Upskill the next generation developer</h1>
              <p>We help thousands of developer, and millions of developer to became one</p>
            </div>
        </Box>
        <Box>

          <div style={{maxWidth:'300px'}}>
            <img src={encryptImg} alt='image' style={{width:'100%'}}/>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default HomePage
