import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Chip, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import { ShoppingCart, LocalOffer, ExpandMore, Star } from '@mui/icons-material';
import movieData from "../../../shared/data.json"; 

const Offers = ({ addToCart, cart = [] }) => {
  const offersList = movieData.offerMovies || [];

  return (
    <Box sx={{ 
      px: { xs: 2, md: '6%' }, 
      py: 10, 
      bgcolor: '#050505', // Un negro más profundo
      minHeight: '100vh', 
      color: 'white' 
    }}>
      {/* Título Estilizado */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 900, 
          letterSpacing: -1,
          background: 'linear-gradient(45deg, #00e5ff 30%, #7c1fa2 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 1
        }}>
          OFERTAS RELÁMPAGO
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontWeight: 500 }}>
          Precios exclusivos por tiempo limitado para la comunidad FOREVER.
        </Typography>
      </Box>

      <Grid container spacing={4}> 
        {offersList.map((movie) => {
          const isInCart = cart.some(c => c.id === movie.id);
          
          return (
            <Grid item xs={12} xl={6} key={movie.id}> 
              <Card sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                bgcolor: 'rgba(255, 255, 255, 0.03)', // Efecto cristal
                backdropFilter: 'blur(10px)',
                borderRadius: 5,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': { 
                  transform: 'translateY(-5px)',
                  borderColor: '#00e5ff',
                  boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)'
                }
              }}>
                
                {/* LADO IZQUIERDO: IMAGEN */}
                <Box sx={{ 
                  width: { xs: '100%', sm: '260px' }, 
                  height: { xs: '240px', sm: '360px' },
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <CardMedia 
                    component="img" 
                    image={movie.imagen} 
                    alt={movie.titulo}
                    sx={{ 
                      height: '100%', 
                      width: '100%',
                      objectFit: 'cover',
                      transition: '0.6s',
                      '&:hover': { transform: 'scale(1.1)' }
                    }}
                  />
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    p: 2, 
                    display: 'flex', 
                    justifyContent: 'space-between' 
                  }}>
                    <Chip 
                      label={`${movie.descuento}% OFF`} 
                      size="small"
                      sx={{ 
                        bgcolor: '#ff1744', 
                        color: 'white', 
                        fontWeight: 900,
                        boxShadow: '0 4px 10px rgba(255, 23, 68, 0.4)'
                      }} 
                    />
                  </Box>
                </Box>
                
                {/* LADO DERECHO: CONTENIDO */}
                <CardContent sx={{ 
                  p: 4, 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="overline" sx={{ color: '#00e5ff', fontWeight: 800 }}>
                      DISPONIBLE EN 4K HDR
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 1 }}>
                      {movie.titulo}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 900 }}>
                      ${movie.precioOferta}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#444', textDecoration: 'line-through' }}>
                      ${movie.precioOriginal}
                    </Typography>
                  </Box>

                  <Accordion sx={{ 
                    bgcolor: 'transparent', 
                    color: '#aaa', 
                    boxShadow: 'none', 
                    mb: 3,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px !important',
                    '&:before': { display: 'none' } 
                  }}>
                    <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#00e5ff' }} />}>
                      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: 1 }}>
                        DETALLES DE LA OFERTA
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ color: '#888' }}>
                        Incluye contenido adicional, detrás de cámaras y acceso premium de por vida.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={() => addToCart(movie)}
                    startIcon={isInCart ? null : <ShoppingCart />}
                    sx={{ 
                      py: 1.8,
                      borderRadius: 3,
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      textTransform: 'none',
                      background: isInCart 
                        ? 'transparent' 
                        : 'linear-gradient(45deg, #7c1fa2 30%, #9c27b0 90%)',
                      border: isInCart ? '2px solid #00e5ff' : 'none',
                      color: isInCart ? '#00e5ff' : 'white',
                      boxShadow: isInCart ? 'none' : '0 10px 20px rgba(124, 31, 162, 0.3)',
                      transition: '0.3s',
                      '&:hover': {
                        background: isInCart ? 'rgba(0, 229, 255, 0.1)' : 'linear-gradient(45deg, #9c27b0 30%, #7c1fa2 90%)',
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    {isInCart ? 'PRODUCTO EN CARRITO' : 'AGREGAR A MI COLECCIÓN'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Offers;