import React from 'react';
import { Box, Typography, Paper, Chip, Button, Grid, Rating } from '@mui/material';

const RecommendedItem = ({ title, img, desc, rating }) => (
  <Paper sx={{ 
    display: 'flex', 
    bgcolor: '#1a1a1a', 
    color: 'white', 
    mb: 4, 
    borderRadius: 4, 
    overflow: 'hidden',
    border: '1px solid #333',
    transition: '0.3s',
    '&:hover': { borderColor: '#00e5ff', transform: 'translateX(10px)' }
  }}>
    <Box component="img" src={img} sx={{ width: { xs: 150, md: 300 }, height: 'auto', objectFit: 'cover' }} />
    <Box sx={{ p: 4, flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
        <Chip label="DESTACADA" sx={{ bgcolor: '#7c1fa2', color: 'white', fontWeight: 'bold' }} size="small" />
        <Rating value={rating} readOnly size="small" sx={{ color: '#00e5ff' }} />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>{title}</Typography>
      <Typography variant="body1" sx={{ color: '#aaa', lineHeight: 1.6, mb: 3 }}>{desc}</Typography>
      <Button variant="outlined" sx={{ color: '#00e5ff', borderColor: '#00e5ff', borderRadius: 20 }}>
        LEER CRÍTICA COMPLETA
      </Button>
    </Box>
  </Paper>
);

const Articles = () => (
  <Box sx={{ p: { xs: 2, md: 8 }, maxWidth: 1000, mx: 'auto' }}>
    <Typography variant="h2" sx={{ textAlign: 'center', mb: 8, fontWeight: 900, color: 'white' }}>
      Nuestras <span style={{ color: '#00e5ff' }}>Joyas</span>
    </Typography>
    <RecommendedItem 
        title="Inception" 
        img="/src/assets/movies/inception.jpg" 
        rating={5}
        desc="Christopher Nolan nos lleva a un viaje por los sueños donde la realidad se dobla. Una pieza técnica perfecta." 
    />
    <RecommendedItem 
        title="The Batman" 
        img="/src/assets/movies/batman.jpg" 
        rating={4.5}
        desc="El mejor enfoque detectivesco del caballero oscuro hasta la fecha. Visualmente impactante y cruda." 
    />
    <RecommendedItem 
        title="Interstellar" 
        img="/src/assets/movies/interstellar.jpg" 
        rating={5}
        desc="Más allá de las estrellas, una historia sobre el tiempo y el amor que te dejará sin aliento." 
    />
  </Box>
);

export default Articles;