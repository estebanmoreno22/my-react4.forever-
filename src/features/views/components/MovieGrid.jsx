import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FavoriteBorder, Favorite, ShoppingCartOutlined, ShoppingCart, ExpandMore } from '@mui/icons-material';
import movieData from "../../../shared/data.json"; 

const MovieGrid = ({ toggleFavorite, addToCart, favorites = [], cart = [] }) => {
  const moviesToShow = movieData.featuredMovies || [];

  const getImageUrl = (name) => {
    return new URL(`../../../assets/movies/${name}`, import.meta.url).href;
  };

  return (
    <Box sx={{ px: '4%', py: 3, bgcolor: '#000' }}>
      <Typography variant="h5" sx={{ color: '#00e5ff', mb: 2, fontWeight: 'bold', ml: 1 }}>
        PELÍCULAS DESTACADAS
      </Typography>

      <Grid container spacing={2}>
        {moviesToShow.map((movie) => {
          const isFavorite = favorites.some(f => f.id === movie.id);
          const isInCart = cart.some(c => c.id === movie.id);

          return (
            /* CAMBIO: xs={6} (2 por fila en cel), sm={4} (3 en tablet), md={3} (4 en PC), lg={2.4} (5 en PC grande) */
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={movie.id}> 
              <Card sx={{ 
                bgcolor: '#111', 
                color: 'white', 
                border: '1px solid #222', 
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%', // Para que todas las tarjetas midan lo mismo
                transition: '0.3s',
                '&:hover': { borderColor: '#00e5ff', transform: 'translateY(-5px)' }
              }}>
                
                {/* CAMBIO: Altura reducida a 260px para que no sea gigante */}
                <Box sx={{ height: '260px', width: '100%', overflow: 'hidden' }}>
                  <CardMedia 
                    component="img" 
                    image={getImageUrl(movie.imagen)} 
                    alt={movie.titulo}
                    sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </Box>

                <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* CAMBIO: Texto más pequeño (variant="body1") y no se corta */}
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '0.95rem', mb: 0.5 }}>
                    {movie.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#00e5ff', mb: 1.5, fontWeight: 'bold' }}>
                    ${movie.precio}
                  </Typography>
                  
                  <Accordion sx={{ 
                    bgcolor: '#1a1a1a', 
                    color: '#ccc', 
                    boxShadow: 'none', 
                    mb: 1.5,
                    border: '1px solid #333',
                    '&:before': { display: 'none' } 
                  }}>
                    <AccordionSummary 
                      expandIcon={<ExpandMore sx={{ color: '#00e5ff', fontSize: '1rem' }} />}
                      sx={{ minHeight: '32px', '& .MuiAccordionSummary-content': { my: 0.5 } }}
                    >
                      <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#00e5ff' }}>SINOPSIS</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 1 }}>
                      <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                        Calidad premium disponible.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={() => toggleFavorite(movie)} size="small" sx={{ color: isFavorite ? '#ff1744' : 'white', p: 0.5 }}>
                      {isFavorite ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
                    </IconButton>
                    
                    <Button 
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() => addToCart(movie)}
                      sx={{ 
                        bgcolor: isInCart ? '#00e5ff' : '#7c1fa2', 
                        color: isInCart ? '#000' : 'white',
                        fontWeight: 'bold',
                        fontSize: '0.65rem', // Botón más compacto
                        textTransform: 'none',
                        '&:hover': { bgcolor: isInCart ? '#00e5ff' : '#9c27b0' }
                      }}
                    >
                      {isInCart ? 'EN CARRITO' : 'COMPRAR'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MovieGrid;