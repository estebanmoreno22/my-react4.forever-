import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box, Button } from '@mui/material';
import { Favorite, ShoppingCart, Visibility } from '@mui/icons-material';

const MovieCard = ({ movie, toggleFavorite, addToCart, isFavorite, isInCart }) => {
  
  // SOLUCIÓN PARA VITE: Construimos la ruta dinámica hacia src/assets/movies
  // Usamos movie.imagen (del JSON) para completar la ruta
  const imgName = movie.imagen || movie.image;
  const imgPath = imgName ? `/src/assets/movies/${imgName}` : '';

  return (
    <Card sx={{ 
      bgcolor: '#121212', 
      color: 'white', 
      borderRadius: 4, 
      overflow: 'hidden',
      border: '1px solid #222',
      width: 220, // Ancho fijo más pequeño para que sea profesional
      mx: 'auto',
      transition: '0.4s',
      '&:hover': { 
        transform: 'translateY(-8px)', 
        boxShadow: '0 10px 20px rgba(0, 229, 255, 0.2)',
        borderColor: '#00e5ff'
      } 
    }}>
      <Box sx={{ overflow: 'hidden', position: 'relative', height: 300 }}>
        <CardMedia 
          component="img" 
          image={imgPath} 
          alt={movie.titulo || movie.title} 
          sx={{ 
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: '0.6s', 
            '&:hover': { transform: 'scale(1.1)' } 
          }}
          // Por si el nombre en el JSON no coincide exacto con el archivo
          onError={(e) => { e.target.src = 'https://via.placeholder.com/220x300?text=Poster+No+Encontrado'; }}
        />
      </Box>

      <CardContent sx={{ p: 1.5, pb: 0 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {movie.titulo || movie.title}
        </Typography>
        <Typography variant="h6" sx={{ color: '#00e5ff', fontWeight: 900, fontSize: '0.9rem' }}>
          ${movie.precio || '45.000'}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 1, pb: 1.5 }}>
        <IconButton 
          size="small"
          onClick={() => toggleFavorite(movie)} 
          sx={{ 
            color: isFavorite ? '#ff1744' : '#555',
            bgcolor: 'rgba(255,255,255,0.05)'
          }}
        >
          <Favorite fontSize="small" />
        </IconButton>
        
        <Button 
          variant="contained"
          size="small"
          onClick={() => addToCart(movie)}
          startIcon={<ShoppingCart fontSize="small" />}
          sx={{ 
            bgcolor: isInCart ? '#00e5ff' : '#7c1fa2',
            color: isInCart ? 'black' : 'white',
            fontWeight: 'bold',
            borderRadius: 1.5,
            fontSize: '0.6rem',
            '&:hover': { bgcolor: isInCart ? '#00b8d4' : '#9c27b0' }
          }}
        >
          {isInCart ? 'LISTO' : 'COMPRAR'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;