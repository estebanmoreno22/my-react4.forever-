import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
// Importamos el video que descargaste
import videoOppenheimer from '../../../assets/movies/oppenheimer-video.mp4';

const Banner = () => {
  return (
    <Box sx={{
      height: '65vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      px: '5%',
      color: 'white',
      bgcolor: 'black'
    }}>
      {/* VIDEO LOCAL CORREGIDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}
      >
        <source src={videoOppenheimer} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* CAPA OSCURA PARA EL TEXTO */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 100%)',
        zIndex: 1
      }} />

      {/* CONTENIDO */}
      <Box sx={{ zIndex: 2, maxWidth: '600px' }}>
        <Typography variant="overline" sx={{ color: '#00e5ff', fontWeight: 'bold', letterSpacing: 2 }}>
          ESTRENO DESTACADO
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
          OPPENHEIMER
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#ccc' }}>
          La historia del físico J. Robert Oppenheimer y su papel fundamental en el desarrollo de la bomba atómica.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            startIcon={<PlayArrow />} 
            sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#00e5ff' } }}
          >
            VER AHORA
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<InfoOutlined />} 
            sx={{ color: 'white', borderColor: 'white' }}
          >
            MÁS INFO
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;